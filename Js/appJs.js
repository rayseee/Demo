console.log("test");
let dTest = document.querySelector('input[type="date"]');
console.log(dTest);
dTest.value=getToDay();

function getToDay(){
    
    // document.write("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");
    // console.log((Today.getFullYear()+"-"+(Today.getMonth()+1)+"-"+Today.getDate()));
    // rDate=(Today.getFullYear()+"-"+(Today.getMonth()+1)+"-"+Today.getDate());
    var Today  = new Date();
    var yyyy = Today .getFullYear().toString();
    var mm = (Today.getMonth()+1).toString();
    var dd = Today.getDate().toString();
    var thisDate = yyyy+"-"+(mm[1] ? mm : "0"+mm[0])+"-"+(dd[1] ? dd  : "0" +dd[0]) ;   
    return thisDate;
}
function getSubtractDay(){
    var Today  = new Date();
    var yyyy = Today .getFullYear().toString();
    var mm = (Today.getMonth()+1).toString();
    var dd = Today.getDate().toString();
    var thisDate = yyyy+"-"+(mm[1] ? mm : "0"+mm[0])+"-"+(dd[1] ? dd  : "0" +dd[0]) ;

    var dTest = document.querySelector('input[type="date"]');
    // var day1 = new Date("08/25/2020"); 
    var tDay=new Date(thisDate);
    var sDay=new Date(dTest.value);
    console.log("sDay"+sDay);
    console.log("TDay"+tDay);
    
    var difference= Math.abs(sDay-tDay);
    days = difference/(1000 * 3600 * 24)
    console.log(days);
    

    var lb_d=document.getElementById('lb_date');
    lb_d.innerText="相差天數:"+days;
}
