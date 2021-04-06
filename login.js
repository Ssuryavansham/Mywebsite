function validate(){
    var username = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    if ( username == "sid" && password == "123"){
    alert ("Login successfully");
    window.open("https://www.codegrepper.com/code-examples/javascript/javascript+take+to+new+page+after+login")
      }
      else{
        alert("Invalid username or password");
        }
      return false;
      }