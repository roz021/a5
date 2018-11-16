function storeInfo(){
    var inputName = document.getElementById("myname");
    localStorage.setItem("name", inputName.value);
    console.log(inputName);
    var inputPass = document.getElementById("mypass");
    localStorage.setItem("pass", inputPass.value);

    var inputEmail = document.getElementById("myemail");
    localStorage.setItem("email", inputEmail.value);
}

function validateInfo(){
    var yourname = localStorage.getItem('name');
    var yourpass = localStorage.getItem('pass');
    var youremail = localStorage.getItem('email');
    if (yourname != "" && yourpass != "" && youremail != ""){
        location.href="../html/signup2.html";
    }
    else{
        alert("Inputs Invalid!");
    }

}
   