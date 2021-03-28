var v=document.getElementsByClassName("adu4")[0];
console.log(v);

document.getElementById("clickthing").onclick=function(){
    if (v.classList.contains("nenx")){
        v.classList.remove("nenx");
    }
    else{
        v.classList.add("nenx");
    }
}