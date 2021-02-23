
function Area () {
    var b=document.querySelector(".base").value;
    var h=document.querySelector(".height").value;
    var x =h*b/2;
    document.querySelector(".demo").innerHTML=x;
    console.log(b,h);
}
    