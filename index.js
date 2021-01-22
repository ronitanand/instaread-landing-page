var bored=document.querySelectorAll(".col-12.col-sm-4");
for(let i =0;i<bored.length;i++){
    if(i==5 ){
        bored[i].style.border="none";
    }
    else if(i==8){
        bored[i].style.border="none";

    }
    else{
        bored[i].style.borderRight="0.5px solid rgb( 173, 171, 171)";
    }
}
var review1=document.querySelector("#review1");
var review2=document.querySelector("#review2");
var review3=document.querySelector("#review3");
review3.style.border="none";
