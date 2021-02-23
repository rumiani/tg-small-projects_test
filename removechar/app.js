
var result=document.querySelector(".result").addEventListener('click',resultnumber);
function resultnumber(){
    var inputchar=document.querySelector('.addsomething').value;
var inputnumber=document.querySelector('.enterednumber').value;
inputchar=inputchar.replace(inputchar.charAt(inputnumber),"");


document.querySelector(".resultnumdemo").innerHTML=inputchar;

}
