
for(var trash of trashs){
    var div=document.createElement("div");
    document.getElementById("trash").appendChild(div);
    div.innerHTML=trash.icon;
    div.style.color=trash.color;
    console.log(trash);
}