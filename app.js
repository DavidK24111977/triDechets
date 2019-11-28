var choosenTrash;
var choosenDechet;
var nbreDechet=4;
var counter = 0;
var btn= document.getElementById("btn");
var resultat = 0;
var trashName;
createTrash();
createDechetList();
var block=false;

function createDechetList(){
    var dechetsList=Array.from(getDechets());


    for(var i in dechetsList){
        var div=document.createElement("div");
        document.getElementById("dechets").appendChild(div);
        div.innerHTML=dechetsList[i];
        div.id=dechetsList[i];
        div.onclick=function(){
            block=true;
            for (var i = 0; i < this.parentNode.children.length; i++) {
                this.parentNode.children[i].classList.remove("selected");
            }
            this.classList.toggle("selected");
            choosenDechet=this.innerHTML;
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
            if(block){
                var divD=document.createElement("div");
                this.appendChild(divD);
                divD.innerHTML=choosenDechet;
                divD.id=choosenDechet;
                choosenTrash=this.id;
                document.getElementById(choosenDechet).style.display="none";

                if(trashs[choosenTrash].dechets.includes(choosenDechet)){
                    resultat++;
                    divD.classList='good';
                } else{
                    divD.classList='bad';
                }

                counter++;
                if(counter === 4){
                    showBtn();
                    result();
                }
                block=false;
            }
        };
    }
    return choosenTrash;
}

function getDechets(){
    var i = 0;
    var dechets=[];
    var uniqueDechets=new Set();
    while(uniqueDechets.size<nbreDechet){

        var maxTrash=Object.keys(trashs).length;
        var trashR=Math.floor(Math.random()*maxTrash);

        switch(trashR){
            case 0:
                trashName="jaune";
                break;
            case 1:
                trashName="vert";
                break;
            case 2:
                trashName="bleu";
                break;
            case 3:
                trashName="marron";
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
function showBtn(){
    btn.style.display="block";
}
function result(){
    btn.onclick=function(){
        document.getElementById("result").innerHTML="Vous avez "+resultat+" points";
        var goods=document.getElementsByClassName("good");
        var bads=document.getElementsByClassName("bad");
        for(var good of goods){
            good.style.backgroundColor="#51ba2e";
        }
        for(var bad of bads){
            bad.style.backgroundColor="#e03725";
        }

    };
}