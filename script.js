const password = document.querySelector('.password');
const len = document.querySelector('.length');

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const special = '!@#$%^&*()-_+=';
const number = '0123456789';
const all = upper+lower+special+number;
// let length=0;
const btn = document.querySelector('.button');
btn.addEventListener('click',function(e)
{
    length=len.value;
});
function createPassword()
{
    let length=len.value;
    let passtext="";
    let passlen=0;
    // alert(passtext.length);
    while (length > passlen)
    {
        // console.log(length);
        passtext+=all[Math.trunc(Math.random()*all.length)];
        length=length-1;
    }
    password.value=passtext;
}
function copyPass()
{
    password.select();
    document.execCommand("copy");
}