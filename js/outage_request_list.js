(function() {

    $(document).ajaxComplete(function() {
        colorTable();
    });
})();

function colorTable(){
    var table = document.getElementById('outageList');

    for(let item of table.tBodies[0].rows){
        if(item.cells[12].innerText == "Non-Auto"){
            if(item.cells[11].innerText == 'ACTIVE'){
                item.style.background = 'rgba(212,232,255,0.3)';
                item.style.color = 'gray';
            }else{
                item.style.background = 'rgba(212,232,255,0.6)';
            }
        }else if(item.cells[12].innerText == "Caution Tag" || item.cells[12].innerText == "For Record"){
            if(item.cells[11].innerText == 'ACTIVE'){
                item.style.background = 'rgba(255,255,212,0.6)';
                item.style.color = 'gray';
            }else{
                item.style.background = 'rgb(255,255,212)';
            }
        }else if(item.cells[12].innerText == "Clearance"){
            if(item.cells[11].innerText == 'ACTIVE'){
                item.style.background = 'rgba(255,212,212, 0.3)';
                item.style.color = 'gray';
            }else{
                item.style.background = 'rgba(255,212,212, 0.6)';
            }
        }else if(item.cells[12].innerText == "Load Transfer"){
            if(item.cells[11].innerText == 'ACTIVE'){
                item.style.background = 'rgba(212,255,212, 0.3)';
                item.style.color = 'gray';
            }else{
                item.style.background = 'rgba(212,255,212, 0.6)';
            }
        }else if(item.cells[12].innerText == "Protection" && item.cells[11].innerText == 'ACTIVE'){
            item.style.color = 'gray';
        }
    }
}