var executed = false;
function f(){
    
    if(!executed){
    let x=document.createElement("button");
    x.innerHTML="poga";
    document.getElementById("divtags").appendChild(x);
    executed = true;
    }
}
