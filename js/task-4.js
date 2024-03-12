
const myButton = document.querySelector('button');



myButton.addEventListener('click', (e) => {
    
const emailInp = document.getElementsByName('email')[0].value.trim();
    const passInp = document.getElementsByName('password')[0].value.trim();
    
    const obj = {
        email: emailInp,
        password: passInp
    };
   
    
    if (emailInp === '' || passInp === '') {
        alert('All form fields must be filled in');
        e.preventDefault();
    } else {

        console.log(obj);
        e.preventDefault();
        document.querySelector('.login-form').reset();
    }
});
    






