var executed = false;
function f(){
    
    if(!executed){
    
    
    var n=document.getElementById("nosaukums").value;
    
    for(let i=0; i<n;i++){
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
function g(){
    if(!executed){
    var n=4;
    
    for(let i=0; i<n;i++){
        var y=document.createElement("br");
        document.getElementById("divtags").appendChild(y);
        for(let f=0; f<n;f++){
            let x=document.createElement("button");
            
  document.getElementById("divtags").appendChild(x);
    let y=document.createElement("img");
   // let r=Math.random(7)+1;
         y.src="images/b1.jpg";
    x.appendChild(y);     
        }
    }
executed = true;
    }
}
