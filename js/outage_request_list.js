(function() {
    $(document).ajaxComplete(function() {
        colorTable();
    });
})();

function colorTable(){
    let table = document.getElementById('outageList');
    let statusCol;
    let workTypeCol;

    for(let [index,item] of (table.tHead.rows[0].childNodes).entries()){
        if(item.innerText == 'Status')
            statusCol = index;
    }

    for(let [index,item] of (table.tHead.rows[0].childNodes).entries()){
        if(item.innerText == 'Work Type')
            workTypeCol = index;
    }

    for(let item of table.tBodies[0].rows){
        if(item.cells[workTypeCol].innerText == "Non-Auto"){
            if(item.cells[statusCol].innerText == 'ACTIVE'){
                item.style.background = 'rgba(212,232,255,0.3)';
                item.style.color = 'gray';
            }else{
                item.style.background = 'rgba(212,232,255,0.6)';
            }
        }else if(item.cells[workTypeCol].innerText == "Caution Tag" || item.cells[12].innerText == "For Record"){
            if(item.cells[statusCol].innerText == 'ACTIVE'){
                item.style.background = 'rgba(255,255,212,0.6)';
                item.style.color = 'gray';
            }else{
                item.style.background = 'rgb(255,255,212)';
            }
        }else if(item.cells[workTypeCol].innerText == "Clearance"){
            if(item.cells[statusCol].innerText == 'ACTIVE'){
                item.style.background = 'rgba(255,212,212, 0.3)';
                item.style.color = 'gray';
            }else{
                item.style.background = 'rgba(255,212,212, 0.6)';
            }
        }else if(item.cells[workTypeCol].innerText == "Load Transfer"){
            if(item.cells[statusCol].innerText == 'ACTIVE'){
                item.style.background = 'rgba(212,255,212, 0.3)';
                item.style.color = 'gray';
            }else{
                item.style.background = 'rgba(212,255,212, 0.6)';
            }
        }else if(item.cells[workTypeCol].innerText == "Protection" && item.cells[statusCol].innerText == 'ACTIVE'){
            item.style.color = 'gray';
        }
    }
}