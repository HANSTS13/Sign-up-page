function clickSubmitButton(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const welcomeMessage=document.getElementById('welcome-message');
    welcomeMessage.innerHTML = ' Welcome, ' +username + '!<br/>' +"Your passowrd is " +password ;
    welcomeMessage.style.display='block';
}