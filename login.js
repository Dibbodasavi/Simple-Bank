document.getElementById('login-submit').addEventListener('click', function(){
    const emailfield = document.getElementById('user-email');
    const useremail = emailfield.value;
    const passfield = document.getElementById('user-password');
    const userpass = passfield.value;
    
    if(useremail == 'habijabi@ultapalta.com' && userpass == 'password'){
        window.location.href = 'banking.html';
    }
    else{
        alert('Use my credintials or Kindly Fuck off -___-');
    }
})