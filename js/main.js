var executed = false;
var parbaude = true;
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
    var bildes = new Array(4*4);
    for(let z=0; z<1; z){
    let  r=Math.floor(Math.random()*Math.floor(7))+1;
    function parbaude(){
        var z=0;
     for(let g=0; g<n;g++){
         for(let k=0; k<n; k++){
             if(r===bildes[g][k]){
                 z=z+1;
                 
             }
         }
         if(z<2){return true;}
     }   
    }
    if(parbaude){
    bildes[f][i]=r;
    console.log(r);

    
         y.src="images/b"+r+".jpg";
    x.appendChild(y);  
}z=z+1;
    }
   
        }
    }
executed = true;
    }
}
