$(document).ready(function(){
    
    initializePage();
})

function initializePage(){
    console.log("initializing page");
    var setname = localStorage.getItem('name');
    if(setname){
        $("#myName").html(setname);
    }
}
function savePhoto(){
    prof = document.getElementById('profilepicture');
    if (prof.files.length != 0){
        console.log(prof.value);
        console.log("converting image");
    // var img = new Image();
    // img.src = prof.value;    
    profData = getBase64Image(prof);
    localStorage.setItem('myprof', profData);
    }
    else{
        alert("couldn't save");
    }
}
// function storeInfo(){
//     console.log("storing");
//     var inputBio = document.getElementById('bio').value;
//     localStorage.setItem('mybio', inputBio);

//     var prof = document.getElementById('profilepicture');
//     var profData = getBase64Image(prof);
//     localStorage.setItem('myprof', profData);

//     var bio = localStorage.getItem('mybio');
//     if(bio){
//         console.log("lets go");
//         location.href="../html/signup3.html";
//     }
// }

// function getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;

//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);

//     var dataURL = canvas.toDataURL("image/png");

//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

