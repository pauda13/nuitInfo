$(document).ready(function (){

    compt = 0;
    $("#sapin").click((e)=>{
        console.log(e);

        const elemId = e.target.id;
       if(elemId.includes("lampe-")){
           $('#'+elemId).css('background-color','#f8cf00');
        } else if(!elemId.includes("sapin")) {
            addLamp(e.clientX,e.clientY);
        }
    })
    $("#sapin").ondblclick(function (e) {
        const elemId = e.target.id
        if(elemId.includes("lampe-")){
            var color = $('#'+elemId).css('background-color')
            if(color === '#f8cf00' ){
                alert("Vous venez de trouver un tresor")
            }
        }
    })
})

function addLamp(px, py) {
    $("#lampes").append(newLamp());
    $("#lampe-"+compt).css({top:py, left: px});
    compt++;
}

function newLamp(){
    return '<div class="ampoule" id="lampe-'+ compt +'" ></div>'
}