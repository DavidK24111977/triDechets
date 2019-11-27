var choosenTrash;
var choosenDechet;
createTrash();
createDechetList()


function createDechetList(){
    var dechetsList=Array.from(getDechets());


    for(var i in dechetsList){
        var div=document.createElement("div");
        document.getElementById("dechets").appendChild(div);
        div.innerHTML=dechetsList[i];
        div.id=dechetsList[i];
        div.onclick=function(){
            for (var i = 0; i < this.parentNode.children.length; i++) {
                this.parentNode.children[i].classList.remove("selected");
            }
            this.classList.toggle("selected");
            choosenDechet=this.innerHTML;
            //console.log(choosenDechet);
        };
    }
    return choosenDechet;
}


function createTrash(){
    for(var i in trashs){
        var div=document.createElement("div");
        document.getElementById("trash").appendChild(div);
        div.innerHTML=trashs[i].icon;
        div.style.color=trashs[i].color;
        div.id=trashs[i].ids;
        div.onclick=function(){
            var divD=document.createElement("div");
            this.appendChild(divD);
            divD.innerHTML=choosenDechet;
            choosenTrash=this.id;
            document.getElementById(choosenDechet).style.display="none";
            console.log(choosenTrash);
            console.log(choosenDechet);
        };
    }
    return choosenTrash;
}

function getDechets(){
    var i = 0;
    var dechets=[];
    var uniqueDechets=new Set();
    while(uniqueDechets.size<8){

        var maxTrash=Object.keys(trashs).length
        var trashR=Math.floor(Math.random()*maxTrash);

        switch(trashR){
            case 0:
                var trashName="jaune";
                break;
            case 1:
                var trashName="vert";
                break;
            case 2:
                var trashName="bleu";
                break;
            case 3:
                var trashName="marron";
                break;
        }
        var dechetsR=Math.floor(Math.random()*trashs[trashName].dechets.length);
        dechets.push(trashs[trashName].dechets[dechetsR]);
        i++;
        uniqueDechets.add(trashs[trashName].dechets[dechetsR]);
        uniqueDechets.size;
    }
    return uniqueDechets;
}