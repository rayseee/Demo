// console.log("test");
let dTest = document.querySelector('input[type="date"]');
// console.log(dTest);
// 將今日日期填入date
dTest.value=getToDay();

let menu = document.getElementById('menu');
let body = document.querySelector('body');

//----------------
// autoRun 區域 
//----------------
let jqDiv=$(".divv");
jqDiv.hide();
    
//----------------
// 觸發事件 區域 
//----------------
$(document).ready(function(){
    $('#p1').html('1. 距離11/19 剩'+getSubtractDay('2021-11-19')+'天');
    $('#p2').html('2. 距離12/24 剩'+getSubtractDay('2021-12-24')+'天');
    //歸零days
    getSubtractDay(getToDay());

    $('#game1').keypress(function (event) {
        if (event.which === 13){
            randomgameInput($('#game1').val())
        }
    });
    $('#date').on('change',function(){
        $('#ul_dateinfo').append('<li>'+getSubtractDay($('#date').val())+'天');
    });
    $('#bt_date').on('click',function(){
        $('#ul_dateinfo').html('');
    });
    //回首頁暫時用法
    $('#a_home').on('click',function(){
        window.location = './index.html';
    });

    //測拉導航測試
    const $menu = $('#navbarToggleExternalContent');
    const $bd = $('#bd');
    $menu.on('show.bs.collapse', function () {$menu.addClass('menu-show');});
    $menu.on('hide.bs.collapse', function () {$menu.removeClass('menu-show');});
    $menu.on('click',function () {$menu.removeClass('menu-show');});
});
//----------------
// fuc 區域 
//----------------
function showDiv(D_id){
    menu.style.display='none';
    jqDiv.hide();
    jqDiv[D_id].style.display='';
}
function changeBGColor(colorName){
    body.style.backgroundColor=colorName;
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
    if(!guess)return;
    let count=0;
    guess=parseInt(guess);
    console.log(ans,guess);
    while(guess!=ans){
        guess = prompt('請猜一個數字('+min+'~'+max+')');
        if(!guess)break;
        guess=parseInt(guess);
        if(isNaN(guess))guess=0;
        if(guess>100 ||guess<0){
            //swal("不要亂猜!!");
            console.log("不要亂猜!!");
            continue;
        }
        else if(guess>=ans){max=guess;}
        else if (guess<=ans){min=guess;}
        count++;
        console.log(ans,guess);
        if(guess==ans)swal("你猜了"+count+"次,答案就是"+ans);
    }
    
}
//----------------
//  randomgameInput 全域變數 
//----------------
let g1_ans=Math.floor(Math.random()*101);
let g1_count=0;
let g1_min=0;
let g1_max=100;
function randomgameInput(guess){
    
    if(!guess)return;
        g1_count++;
        guess=parseInt(guess);
        if(isNaN(guess)){
            guess=0;
            $('#lb_game1').text("不要亂猜!!");
        }
        if(guess>100 ||guess<0){
            //swal("不要亂猜!!");
            console.log("不要亂猜!!");
            $('#lb_game1').text("不要亂猜!!");
        }
        else if(guess>=g1_ans){
            g1_max=guess;
            $('#lb_game1').text("請猜一個數字("+g1_min+"~"+g1_max+")，目前猜了"+g1_count+"次。");
        }
        else if (guess<=g1_ans){
            g1_min=guess;
            $('#lb_game1').text("請猜一個數字("+g1_min+"~"+g1_max+")，目前猜了"+g1_count+"次。");
        }
        console.log(g1_ans,guess);

        if(guess==g1_ans){
            swal("你猜了"+g1_count+"次,答案就是"+g1_ans);
            g1_ans=Math.floor(Math.random()*101);
            g1_count=0;
            g1_min=0;
            g1_max=100;
            $('#game1').val(0);
            $('#lb_game1').text("");
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
    var Today  = new Date();
    var yyyy = Today .getFullYear().toString();
    var mm = (Today.getMonth()+1).toString();
    var dd = Today.getDate().toString();
    var thisDate = yyyy+"-"+(mm[1] ? mm : "0"+mm[0])+"-"+(dd[1] ? dd  : "0" +dd[0]) ;   
    return thisDate;
}
function getSubtractDay(dTest){
    var thisDate = getToDay();
    var tDay=new Date(thisDate);
    var sDay=new Date(dTest);
    console.log("sDay"+sDay);
    console.log("TDay"+tDay);
    var difference= Math.abs(sDay-tDay);
    days = difference/(1000 * 3600 * 24)
    console.log(days);
    var lb_d=document.getElementById('lb_date');
    lb_d.innerText="與今天相差天數:"+days+"天";
    return days;
}
