 const form=document.getElementById("myform");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let isValid=true;
    //errors
    document.getElementById("nameError").innerText="";
    document.getElementById("emailError").innerText="";
    document.getElementById("passwordError").innerText="";
    document.getElementById("confirmError").innerText="";
    //name validation
    if(name.trim()===""){
        document.getElementById("nameError").innerText="Name is required";
        isValid=false;
    }
    //email validadtion
    let emailpattern=/^[^]+@[^]+\.[a-z]{2,3}$/;
    if(!email.match(emailpattern)){
        document.getElementById("emailError").innerText="Enter a valid email";
        isValid=false;
    }
    //password validation
    if(password.length<10){
        document.getElementById("passwordError").innerText="password must be atleast 10 character";
        isValid=false;
    }
    //confirmpassword validation
    if(password!==confirmPassword){
        document.getElementById("confirmPassword").innerText="password do not match";
        isValid=false;
    }
    if(isValid){
        alert("Form Submitted Successfully");
        form.requestFullscreen;
    }
});