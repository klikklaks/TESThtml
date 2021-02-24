var executed = false;
function f(){
    
    if(!executed){
    
    
    var n=document.getElementById("nosaukums").value;
    
    for(let i=0; i<n;i++){
        var matem=0;
        var y=document.createElement("br");
        document.getElementById("divtags").appendChild(y);
        for(let f=0; f<n;f++){
            let x=document.createElement("button");
            x.innerHTML=i*n+(f+1);
    document.getElementById("divtags").appendChild(x);
        }
    }
    executed = true;
    }
}
