function storeInfo(){
    var inputName = document.getElementById("myname");
    localStorage.setItem("name", inputName.value);
    
    var inputPass = document.getElementById("mypass");
    localStorage.setItem("pass", inputPass.value);

    var inputEmail = document.getElementById("myemail");
    localStorage.setItem("email", inputEmail.value);
}