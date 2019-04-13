$(document).ready(function () {
    $('#txtDate').datepicker();
    $('#follow_Date').datepicker();
});

function getdate() {
    var tt = document.getElementById('txtDate').value;

    var date = new Date(tt);
    var newdate = new Date(date);

    newdate.setDate(newdate.getDate() + 28);
    
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();

    var someFormattedDate = dd + '/' + mm + '/' + y;
    document.getElementById('follow_Date').value = someFormattedDate;
}