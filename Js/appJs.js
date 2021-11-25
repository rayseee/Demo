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
    $('#p1').html('1. 110/10/03建立Demo 已過 '+(-getSubtractDay('2021-10-03'))+'天');

    if(getSubtractDay('2021-12-24')<0){//大於零 代表未來日期
        $('#p2').html('2. 距離12/24 已過'+(-getSubtractDay('2021-12-24'))+'天');
    }else{
        $('#p2').html('2. 距離12/24 相差'+getSubtractDay('2021-12-24')+'天');

    }
    
    $('#p3').html('<br>'+'🎉4/14已過'+(-getSubtractDay('2021-04-14'))+'天<br>'+'');
    // $('#p3').html('3. 距離12/24 剩'+getSubtractDay('2021-12-24')+'天');
    // $('#p4').html('4. 距離12/24 剩'+getSubtractDay('2021-12-24')+'天');
    // $('#p5').html('5. 距離12/24 剩'+getSubtractDay('2021-12-24')+'天');

    //歸零days
    getSubtractDay(getToDay());

    $('#game1').keypress(function (event) {
        if (event.which === 13){
            randomgameInput($('#game1').val())
        }
    });

    $('#date').on('change',function(){
        $('#ul_dateinfo').append('<li>'+$('#date').val()+'與今日相差'+getSubtractDay($('#date').val())+'天');
    });
    // 清除date ul
    $('#bt_date').on('click',function(){
        $('#ul_dateinfo').html('');
    });
    // 回首頁暫時用法
    $('#a_home').on('click',function(){
        window.location = './index.html';
    });
    // 燈箱
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    //測拉導航測試
    const $menu = $('#navbarToggleExternalContent');
    const $menuButton =$('.navbar-toggler');
    $menu.on('show.bs.collapse', function () {$menu.addClass('menu-show');});
    $menu.on('hide.bs.collapse', function () {$menu.removeClass('menu-show');});
    $menu.on('click',function () {$menuButton.click();});
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
//----------------
//  randomcolor1 全域變數 
//----------------
let intervalID;
function randomcolor1(){
    
    if($('#randomcolor1').html()=='連續隨機')
    {   clearInterval(intervalID);
        console.log('init_clear'+intervalID);
        intervalID = setInterval(function() {
            randomcolor();
        }, 1000);
        console.log(intervalID);
        $('#randomcolor1').html('連續隨機(開)');
    }
    else if($('#randomcolor1').html()=='連續隨機(開)'){
        clearInterval(intervalID);
        console.log('clear'+intervalID);
        intervalID=null;
        $('#randomcolor1').html('連續隨機');
    }
}
// c顏色 f旗標
let r_c=0;
let r_f=0;
let g_c=0;
let g_f=0;
let b_c=0;
let b_f=0;
let t_f=0;
function color1(){
    
    if($('#color1').html()=='連續')
    {   clearInterval(intervalID);
        r_c=0;
        r_f=0;
        g_c=0;
        g_f=0;
        b_c=0;
        b_f=0;
        t_f=0;
        console.log('init_clear'+intervalID);
        intervalID = setInterval(function() {
            body.style.backgroundColor='rgb('+r_c+','+g_c+','+b_c+')';
            //原code

            if(r_c<=255 && r_f==0 && t_f==0){ 
                r_c++;
                if(r_c>=255)r_f=1;
            }
            else if(r_f==1) {
                if(r_c==1){r_f=0;}
                r_c--;
                t_f=1;
                if(g_c<=255 && g_f==0 && t_f==1){
                    g_c++;
                    if(g_c>=255)g_f=1;
                }
                else if(g_f==1) {
                    if(g_c==1){g_f=0;}
                    g_c--;
                    t_f=2;
                    if(b_c<=255 && b_f==0 && t_f==2){
                        b_c++;
                        if(b_c>=255)b_f=1;
                    }
                    else if(b_f==1) {
                        if(b_c==1){b_f=0;}
                        b_c--;
                        t_f=0;
                    }
                }
            }
            else if(r_c==0 && r_f ==0){
                if(g_c<=255 && g_f==0 && t_f==1){
                    g_c++;
                    if(g_c>=255)g_f=1;
                }
                else if(g_f==1) {
                    if(g_c==1){g_f=0;}
                    g_c--;
                    t_f=2;
                    if(b_c<=255 && b_f==0 && t_f==2){
                        b_c++;
                        if(b_c>=255)b_f=1;
                    }
                    else if(b_f==1) {
                        if(b_c==1){b_f=0;}
                        b_c--;
                        t_f=0;
                    }
                }
            }


            if(r_c==0 && r_f ==0 && g_c==0 && g_f==0){
                
                if(b_c<=255 && b_f==0 && t_f==2){
                        b_c++;
                        if(b_c>=255)b_f=1;
                    }
                    else if(b_f==1) {
                        if(b_c==1){b_f=0;}
                        b_c--;
                        if(b_c==0){
                            t_f=0;
                            console.log("reset");
                        }
                    }
            }
            console.log(r_c,r_f,g_c,g_f,b_c,b_f,t_f);
        }, 1);
        console.log(intervalID);
        $('#color1').html('連續(開)');
    }
    else if($('#color1').html()=='連續(開)'){
        r_c=0;
        g_c=0;
        b_c=0;
        clearInterval(intervalID);
        console.log('clear'+intervalID);
        $('#color1').html('連續');
    }
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
            return;
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
    var f=0;//秀出 已經過日期 負號註記
    console.log("sDay "+sDay);
    console.log("TDay "+tDay);
    var difference= Math.abs(sDay-tDay);
    if((sDay-tDay)>0){f=1;}
    else{f=0;}
    days = difference/(1000 * 3600 * 24)
    console.log(days);
    var lb_d=document.getElementById('lb_date');
    lb_d.innerText="與今天相差天數:"+days+"天";
    if(f==0){return (-days);}
    else{return days;}
}
