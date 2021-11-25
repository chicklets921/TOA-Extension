(function() {
    $(document).ajaxComplete(function() {
        findName();
    });
})();

function findName(){
    let table = document.getElementById('operatorLogListTable');
    let nameString = document.getElementsByClassName('dropdown topMenu')[4].innerText.trim().split(' ');
    let firstLast = nameString[0]+' '+nameString[1];

    for(let item of table.tBodies[0].rows){
        let nameCell = item.cells[5];
        if(nameCell.innerText == firstLast){
            nameCell.style.color = '#00F';
        }
    }
}
