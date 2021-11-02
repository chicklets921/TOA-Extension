(function() {

    $(document).ajaxStop(function() {
        if($('#calendarContainer').length < 1){
            addStyleSheet();
            addTimeCalculator();
            initDatePickers();
        }

        $('#calendarContainer').on('change', calculateMinutes);
    });
})();

function initDatePickers(){
    $('#startDatePicker').datetimepicker({sideBySide: true, format: 'MM/DD/YYYY HH:mm', defaultDate: grabCurrentDTISDate()}).on("dp.change", function (e) {
        $('#endDatePicker').data("DateTimePicker").setMinDate(e.date);
    });
    $('#endDatePicker').datetimepicker({sideBySide: true, format: 'MM/DD/YYYY HH:mm', defaultDate: new Date()}).on("dp.change", function (e) {
        $('#startDatePicker').data("DateTimePicker").setMaxDate(e.date);
    });
}

function calculateMinutes(){
    $('#calculatedMinutes').text((new Date($('#endDateText').val()) - new Date($('#startDateText').val()))/1000/60 + " Mins");
}

function addStyleSheet(){
    var styles = `
    #calendarContainer{
        width:100%;
        padding:10px;
        float: left;
    }
    #calendarContainer>label,.date{
        float:left;
        margin-left: 10px;
    }
    .date{
        width:160px;
    }
    #calculatedMinutes{
        float:right;
        font-size:2rem;
    }
    `;

    var styleSheet = document.createElement('style')
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet);
}

function grabCurrentDTISDate(){
    let DTISDate = new Date(document.getElementsByTagName('label')[1].innerText.split(' ')[0]);

    let lockoutRows = document.getElementsByClassName('group-item-circuit-lockouts');
    if(lockoutRows.length){
        let lastLockoutTime = lockoutRows[lockoutRows.length-1].cells[1].innerText;
        lastLockoutTime = lastLockoutTime.split(":");
        DTISDate.setHours(lastLockoutTime[0]);
        DTISDate.setMinutes(lastLockoutTime[1]);
    }
    return DTISDate;
}

function addTimeCalculator(){
    let filterRow = document.getElementById('filterList');

    let container = document.createElement('div');
    container.id = 'calendarContainer';
    container.className = 'panel panel-default';

    /* Start Time Date Picker*/
    let startDatePickerLabel = document.createElement('label');
    startDatePickerLabel.for = "startDatePicker";
    startDatePickerLabel.innerText = "Start Time:";

    let startDatePickerDiv = document.createElement('div');
    startDatePickerDiv.className = 'input-group date';
    startDatePickerDiv.id = 'startDatePicker';
    startDatePickerDiv.setAttribute('data-provide','datepicker');

    let startDateTextField = document.createElement('input');
    startDateTextField.type = 'text';
    startDateTextField.className = 'form-control';
    startDateTextField.id = 'startDateText';

    let startDateSpanIconHolder = document.createElement('span');
    startDateSpanIconHolder.className = 'input-group-addon';

    let startDateSpanIcon = document.createElement('span');
    startDateSpanIcon.className = 'glyphicon glyphicon-calendar';

    /* End Time Date Picker */

    let endDatePickerLabel = document.createElement('label');
    endDatePickerLabel.for = "endDatePicker";
    endDatePickerLabel.innerText = "End Time:";

    let endDatePickerDiv = document.createElement('div');
    endDatePickerDiv.className = 'input-group date';
    endDatePickerDiv.id = 'endDatePicker';
    endDatePickerDiv.setAttribute('data-provide','datepicker');

    let endDateTextField = document.createElement('input');
    endDateTextField.type = 'text';
    endDateTextField.className = 'form-control';
    endDateTextField.id = 'endDateText';

    let endDateSpanIconHolder = document.createElement('span');
    endDateSpanIconHolder.className = 'input-group-addon';

    let endDateSpanIcon = document.createElement('span');
    endDateSpanIcon.className = 'glyphicon glyphicon-calendar';

    /* Final Minutes */
    let minutesText = document.createElement('span');
    minutesText.id = 'calculatedMinutes';
    minutesText.innerText = "Select the dates/times";

    /* Combine all the elements*/
    container.append(startDatePickerLabel);
    startDatePickerDiv.append(startDateTextField);
    startDateSpanIconHolder.append(startDateSpanIcon);
    startDatePickerDiv.append(startDateSpanIconHolder);
    container.append(startDatePickerDiv);

    container.append(endDatePickerLabel);
    endDatePickerDiv.append(endDateTextField);
    endDateSpanIconHolder.append(endDateSpanIcon);
    endDatePickerDiv.append(endDateSpanIconHolder);
    container.append(endDatePickerDiv);

    container.append(minutesText);

    filterRow.after(container);
}
