$(document).ready(function(){
    console.log("ready!");

    var setname = localStorage.getItem('name');
    if(setname){
        $("#myName").html(setname);
    }
})