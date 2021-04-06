function validate(){
    var username=document.getElementById("inputEmail").Value;
    var password=document.getElementById("inputPassword").Value;
    if(usernam=="s@gmail.com" && password=="1234"){
        window.location="file:///C:/xampp/htdocs/Mypersnol/index.html";
        return false;
    }
    else{
        alert("login failed")
    }

}