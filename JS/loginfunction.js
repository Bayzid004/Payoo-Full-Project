document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('click')
    const getPhoneNumber = document.getElementById('phone-number').value;
    const getPinNumber = document.getElementById('pin-number').value;
    // console.log(getPhoneNumber,getPinNumber);
    const phoneNumber = parseInt(getPhoneNumber);
    const pinNumber = parseInt(getPinNumber);
    if(phoneNumber === 1234 && pinNumber === 123){
        window.location.href = './home.html';
    }else{
        alert("Something Wrong");
    }
})