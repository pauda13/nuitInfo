$(document).ready(function (){
    compt = 0;
    $("#sapin").click((e)=>{
        console.log(e);

        const elemId = e.target.id;
        //alert(elemId)
       if(elemId.includes("lampe-")){
           $('#'+elemId).css('background-color','#f8cf00');
           //alert('test')
        } else {
            addLamp(e.clientX,e.clientY);
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