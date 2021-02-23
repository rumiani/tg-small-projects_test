
// making an array
let myArray=[];
function addanumber(){
     var newnum=document.querySelector('.addanumber').value;
     newnum=Number(newnum);
     myArray.push(newnum);
// console.log(myArray)
//end  making an array


// sorting
var sorrrrt=myArray.sort(function(x,y){
     return x-y;
})
console.log(sorrrrt);
// end sorting


 //clean the input
var addnumbtn;
 addnumbtn=addEventListener("click",cleaninput);

 function cleaninput() {
    document.querySelector('.addanumber').value = "hey";
 };
 //end cleaning the input

//  showing the array
 demo()
function demo(){
const demonumbers=document.querySelector(".demonumbers");
demonumbers.innerHTML=myArray;
}
// end showing the array


}   

function resultnumber(){
var resultnum;
     // resultnum=document.querySelector('.resultnum').value;
     var x=myArray.length;
     var y=document.querySelector('.enterednumber').value;
     resultnum=myArray.splice(x-y,x);
console.log(resultnum);
const resultnumdemo=document.querySelector('.resultnumdemo')
resultnumdemo.innerHTML=resultnum;
}





