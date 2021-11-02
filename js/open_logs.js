(function() {
    let $ = window.jQuery;
    $(document).ajaxComplete(function() {
        if($('#openCount').length < 1){
            createOpenElement();
        }
        changeText();
    });
})();

function createOpenElement(){
    let entriesElements = document.getElementById('operatorLogListTable_paginate');
    let countTitle = document.createElement('span');
    countTitle.setAttribute("id", "openCount");
    countTitle.style.color = "#A00";
    entriesElements.append(countTitle);
}

function changeText(){
    let table = document.getElementById('operatorLogListTable');
    let countTitle = document.getElementById('openCount');
    let totalOpen = 0;
    let label;

    for(let item of table.tBodies[0].rows){
        if(/(__)|(--)|(xx)/.test(item.cells[3].innerText.toLowerCase())){
            item.style.color = '#A00';
            totalOpen++;
        }
    }
    label = `Open Logs: ${totalOpen}`;
    countTitle.innerHTML = `<h5>${label}</h5>`;
    changeTitle(label);
}

function changeTitle(label){
    let title = document.title.split(' ');
    document.title = title[0] + ' ' + title[1] + ` - ${label}`;
}