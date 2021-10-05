// console.log("test");
let dTest = document.querySelector('input[type="date"]');
// console.log(dTest);
dTest.value=getToDay();

let div1 = document.getElementById('dateCalculator');
let div2 = document.getElementById('colorDiv');
let body = document.querySelector('body');

function displaydiv1(){
    div1.style.display='';
    div2.style.display='none';
}
function displaydiv2(){
    div1.style.display='none';
    div2.style.display='';
}
function blue(){
    body.style.backgroundColor='blue';
}
function red(){
    body.style.backgroundColor='red';
}
function green(){
    body.style.backgroundColor='green';
}
function randomcolor(){
    let r_rand=Math.floor(Math.random()*255);
    let g_rand=Math.floor(Math.random()*255);
    let b_rand=Math.floor(Math.random()*255);
    let rgb_color='rgb('+r_rand+','+g_rand+','+b_rand+')';
    console.log(r_rand,g_rand,b_rand);
    body.style.backgroundColor=rgb_color;
    
    
}
function randomgame(){
    let ans=Math.floor(Math.random()*101);
    let min=0;
    let max=100;
    let guess = prompt('請猜一個數字(0~100)');
    let count=0;
    guess=parseInt(guess);
    console.log(ans,guess);
    while(guess!=ans){
         if(guess>=ans){max=guess;}
         else if (guess<=ans){min=guess;}
         count++;
        guess = prompt('請猜一個數字('+min+'~'+max+')');
        guess=parseInt(guess);
        console.log(ans,guess);
        if(guess==ans)swal("你猜了"+count+"次");
    }
    
}
function navbarClose(){
    let nav =document.getElementById('Nav_navbar');
    if(nav.style.display==='none'){
        nav.style.display='';
    }
    else{
        nav.style.display='none';
    }
}
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
    lb_d.innerText="與今天相差天數:"+days+"天";
}
