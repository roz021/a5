/*
person: name of Modal 
name: actual name of person
pic: name of file
bio: bio
profile: file name

name: id for this div
pic: name of file
person: name of Modal
profile: file name
*/

var friends = [
    {'person' : 'pguo', 'name' : 'Phillip Guo' , 'pic' : 'pguo', 'bio' : 'blah', 'profile' : 'pguo' },
    {'person' : 'ed', 'name' : 'Edwin Fu', 'pic' : 'edwin' , 'bio' : 'blah', 'profile' : 'edw'  },
    {'person' : 'arn', 'name' : 'Arnold S.', 'pic' : 'arnolds', 'bio' : 'blah' , 'profile' : 'arn'  },
    {'person' : 'ty', 'name' : 'Tyler the Creator', 'pic' : 'TylerTC' , 'bio' : 'blah', 'profile' : 'ttc'}
]
var sfriends = [
    {'person' : 'bey', 'name' : 'Beyonce Knowles', 'pic' : 'Beyonce', 'bio' : 'blah', 'profile' : 'bey' },
    {'person' : 'frank' ,'name' : 'Frank Ocean', 'pic' : 'FOcean', 'bio' : 'blah', 'profile' : 'fo' },
    {'person' : 'klay', 'name' : 'Klay Thompson', 'pic' : 'KThompson' , 'bio' : 'blah', 'profile' : 'kt' },
   // {'person' : 'lilp', 'name' : 'Lil Pump', 'pic' : 'LilPump' , 'bio' : 'blah', 'profile' : 'lp'  },
]

var source = $("#profs").html();
var template = Handlebars.compile(source);
var parentDiv = $("#friendsall");

for (var i = 0; i < friends.length; i++){
    var curData = friends[i];
    var curHtml = template(curData);
    console.log(curHtml);
    parentDiv.append(curHtml);
}

