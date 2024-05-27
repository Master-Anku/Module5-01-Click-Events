//1.ID များကို ဆင့်ခေါ်၍ အသုံးပြုချင်း 
var pwdBtnEl = $('#pwd-btn');
var pwdEl = $('#pwd-d');

//2.random 
function getPwdCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 77) +34);
}

//3.function for loop 
function pwdGe(num) {
    var pwd ='';
    for (var i = 0; i < num; i++) {
        pwd += getPwdCharacter();
    }
    return pwd;
}

//4.Click on Change Pwds 
pwdBtnEl.on('click', function (){
    var newPwd = pwdGe(15);
    pwdEl.text(newPwd);

});