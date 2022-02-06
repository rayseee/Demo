let dTest = document.querySelector('input[type="date"]');
// console.log(dTest);
// 將今日日期填入date
dTest.value = getToDay();

let menu = document.getElementById("menu");
let body = document.querySelector("body");

//----------------
// autoRun 區域
//----------------
let jqDiv = $(".divv");
jqDiv.hide();
//----------------
// ChartData 區域
//----------------
let IntN=7;
var lineChartData = {
    labels: [IntN, IntN*2, IntN*3, IntN*4, IntN*5, IntN*6, IntN*7, IntN*8, IntN*9], //顯示區間名稱
    datasets: [{
        label: '預期', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#ea464f",
        borderColor: "#ea464f",
        borderWidth: 5,
        data: [84, 83.5, 83, 82.5, 82, 81.5, 81, 80.5, 80], // 資料
        fill: false, // 是否填滿色彩
    }, {
        label: '實際',
        lineTension: 0,
        fill: false,
        backgroundColor: "#29b2ff",
        borderColor: "#29b2ff",
        borderWidth: 5,
        data: [84, 84.3, 83.8, 82.7, 82, 82.3, 84, 83, 82.7],
    },]
};
function drawLineCanvas(ctx,data) {
    window.myLine = new Chart(ctx, {  //先建立一個 chart
        type: 'line', // 型態
        data: data,
        options: {
                responsive: true,
                legend: { //是否要顯示圖示
                    display: true,
                },
                tooltips: { //是否要顯示 tooltip
                    enabled: true
                },
                scales: {  //是否要顯示 x、y 軸
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }]
                },
            }
    });
};
//----------------
// 觸發事件 區域
//----------------
$(document).ready(function () {
    var p1_Date = "2021-10-03";
    var p1_lebal = "1. "+p1_Date+" 建立 Demo 已過 " + -getSubtractDay(p1_Date) + "天";
    var p2_Date = "2021-12-27";
    var if0=" 相差 ";
    var if1=" 已過 ";
    $("#p1").html(p1_lebal);

    // if (getSubtractDay(p2_Date) < 0) //大於零 代表未來日期
    //     $("#p2").html(p2_lebal(if1,p2_Date,1));//1會加負號 (已過)
    // else 
    //     $("#p2").html(p2_lebal(if0,p2_Date,0));
    

    $("#p3").html("<br>" + "🎉2021-04-14 已過 " + -getSubtractDay("2021-04-14") + "天<br>" + "");
    // $('#p3').html('3. 距離12/24 剩'+getSubtractDay('2021-12-24')+'天');
    // $('#p4').html('4. 距離12/24 剩'+getSubtractDay('2021-12-24')+'天');
    // $('#p5').html('5. 距離12/24 剩'+getSubtractDay('2021-12-24')+'天');

    //歸零days
    getSubtractDay(getToDay());

    $("#game1").keypress(function (event) {
        if (event.which === 13) {
            randomgameInput($("#game1").val());
        }
    });

    $("#date").on("change", function () {
        $("#ul_dateinfo").append(//直接新增在頁面下方建立list
            "<li>" +
            $("#date").val() +
            "與今日相差" +
            getSubtractDay($("#date").val()) +
            "天"
        );
    });
    // 清除date ul
    $("#bt_date").on("click", function () {
        $("#ul_dateinfo").html("");
    });
    // 回首頁暫時用法
    $("#a_home").on("click", function () {
        window.location = "./index.html";
    });
    // 燈箱
    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    //測拉導航測試
    const $menu = $("#navbarToggleExternalContent");
    const $menuButton = $(".navbar-toggler");
    $menu.on("show.bs.collapse", function () {
        $menu.addClass("menu-show");
    });
    $menu.on("hide.bs.collapse", function () {
        $menu.removeClass("menu-show");
    });
    $menu.on("click", function () {
        $menuButton.click();
    });
    
    var ctx = document.getElementById("canvas").getContext("2d");
    drawLineCanvas(ctx,lineChartData);
});
//----------------
// fuc 區域
//----------------
function p2_lebal(str,p2_Date,flag) {
    if(flag==1)
        return "2. 距離 "+p2_Date+str + -getSubtractDay(p2_Date) + "天" ;
    else
        return "2. 距離 "+p2_Date+str + getSubtractDay(p2_Date) + "天" ;
}
function showDiv(D_id) {
    menu.style.display = "none";
    jqDiv.hide();
    jqDiv[D_id].style.display = "";
}
function changeBGColor(colorName) {
    body.style.backgroundColor = colorName;
}
function randomcolor() {
    let r_rand = Math.floor(Math.random() * 255);
    let g_rand = Math.floor(Math.random() * 255);
    let b_rand = Math.floor(Math.random() * 255);
    let rgb_color = "rgb(" + r_rand + "," + g_rand + "," + b_rand + ")";
    console.log(r_rand, g_rand, b_rand);
    body.style.backgroundColor = rgb_color;
}
//----------------
//  randomcolor1 全域變數
//----------------
let intervalID;
function randomcolor1() {
    if ($("#randomcolor1").html() == "連續隨機") {
        clearInterval(intervalID);
        console.log("init_clear" + intervalID);
        intervalID = setInterval(function () {
            randomcolor();
        }, 1000);
        console.log(intervalID);
        $("#randomcolor1").html("連續隨機(開)");
    } else if ($("#randomcolor1").html() == "連續隨機(開)") {
        clearInterval(intervalID);
        console.log("clear" + intervalID);
        intervalID = null;
        $("#randomcolor1").html("連續隨機");
    }
}
// c顏色 f旗標
let r_c = 0;
let r_f = 0;
let g_c = 0;
let g_f = 0;
let b_c = 0;
let b_f = 0;
let t_f = 0;
function color1() {
    if ($("#color1").html() == "連續") {
        clearInterval(intervalID);
        r_c = 0;
        r_f = 0;
        g_c = 0;
        g_f = 0;
        b_c = 0;
        b_f = 0;
        t_f = 0;
        console.log("init_clear" + intervalID);
        intervalID = setInterval(function () {
            body.style.backgroundColor = "rgb(" + r_c + "," + g_c + "," + b_c + ")";
            //原code

            if (r_c <= 255 && r_f == 0 && t_f == 0) {
                r_c++;
                if (r_c >= 255) r_f = 1;
            } else if (r_f == 1) {
                if (r_c == 1) {
                    r_f = 0;
                }
                r_c--;
                t_f = 1;
                if (g_c <= 255 && g_f == 0 && t_f == 1) {
                    g_c++;
                    if (g_c >= 255) g_f = 1;
                } else if (g_f == 1) {
                    if (g_c == 1) {
                        g_f = 0;
                    }
                    g_c--;
                    t_f = 2;
                    if (b_c <= 255 && b_f == 0 && t_f == 2) {
                        b_c++;
                        if (b_c >= 255) b_f = 1;
                    } else if (b_f == 1) {
                        if (b_c == 1) {
                            b_f = 0;
                        }
                        b_c--;
                        t_f = 0;
                    }
                }
            } else if (r_c == 0 && r_f == 0) {
                if (g_c <= 255 && g_f == 0 && t_f == 1) {
                    g_c++;
                    if (g_c >= 255) g_f = 1;
                } else if (g_f == 1) {
                    if (g_c == 1) {
                        g_f = 0;
                    }
                    g_c--;
                    t_f = 2;
                    if (b_c <= 255 && b_f == 0 && t_f == 2) {
                        b_c++;
                        if (b_c >= 255) b_f = 1;
                    } else if (b_f == 1) {
                        if (b_c == 1) {
                            b_f = 0;
                        }
                        b_c--;
                        t_f = 0;
                    }
                }
            }

            if (r_c == 0 && r_f == 0 && g_c == 0 && g_f == 0) {
                if (b_c <= 255 && b_f == 0 && t_f == 2) {
                    b_c++;
                    if (b_c >= 255) b_f = 1;
                } else if (b_f == 1) {
                    if (b_c == 1) {
                        b_f = 0;
                    }
                    b_c--;
                    if (b_c == 0) {
                        t_f = 0;
                        console.log("reset");
                    }
                }
            }
            console.log(r_c, r_f, g_c, g_f, b_c, b_f, t_f);
        }, 1);
        console.log(intervalID);
        $("#color1").html("連續(開)");
    } else if ($("#color1").html() == "連續(開)") {
        r_c = 0;
        g_c = 0;
        b_c = 0;
        clearInterval(intervalID);
        console.log("clear" + intervalID);
        $("#color1").html("連續");
    }
}
function randomgame() {
    let ans = Math.floor(Math.random() * 101);
    let min = 0;
    let max = 100;
    let guess = prompt("請猜一個數字(0~100)");
    if (!guess) return;
    let count = 0;
    guess = parseInt(guess);
    console.log(ans, guess);
    while (guess != ans) {
        guess = prompt("請猜一個數字(" + min + "~" + max + ")");
        if (!guess) break;
        guess = parseInt(guess);
        if (isNaN(guess)) guess = 0;
        if (guess > 100 || guess < 0) {
            //swal("不要亂猜!!");
            console.log("不要亂猜!!");
            return;
        } else if (guess >= ans) {
            max = guess;
        } else if (guess <= ans) {
            min = guess;
        }
        count++;
        console.log(ans, guess);
        if (guess == ans) swal("你猜了" + count + "次,答案就是" + ans);
    }
}
//----------------
//  randomgameInput 全域變數
//----------------
let g1_ans = Math.floor(Math.random() * 101);
let g1_count = 0;
let g1_min = 0;
let g1_max = 100;
function randomgameInput(guess) {
    if (!guess) return;
    g1_count++;
    guess = parseInt(guess);
    if (isNaN(guess)) {
        guess = 0;
        $("#lb_game1").text("不要亂猜!!");
    }
    if (guess > 100 || guess < 0) {
        //swal("不要亂猜!!");
        console.log("不要亂猜!!");
        $("#lb_game1").text("不要亂猜!!");
    } else if (guess >= g1_ans) {
        g1_max = guess;
        $("#lb_game1").text(
            "請猜一個數字(" +
            g1_min +
            "~" +
            g1_max +
            ")，目前猜了" +
            g1_count +
            "次。"
        );
    } else if (guess <= g1_ans) {
        g1_min = guess;
        $("#lb_game1").text(
            "請猜一個數字(" +
            g1_min +
            "~" +
            g1_max +
            ")，目前猜了" +
            g1_count +
            "次。"
        );
    }
    console.log(g1_ans, guess);

    if (guess == g1_ans) {
        swal("你猜了" + g1_count + "次,答案就是" + g1_ans);
        g1_ans = Math.floor(Math.random() * 101);
        g1_count = 0;
        g1_min = 0;
        g1_max = 100;
        $("#game1").val(0);
        $("#lb_game1").text("");
    }
}
function navbarClose() {
    let nav = document.getElementById("Nav_navbar");
    if (nav.style.display === "none") {
        nav.style.display = "";
    } else {
        nav.style.display = "none";
    }
}
function getToDay() {
    var Today = new Date();
    var yyyy = Today.getFullYear().toString();
    var mm = (Today.getMonth() + 1).toString();
    var dd = Today.getDate().toString();
    var thisDate =
        yyyy + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + (dd[1] ? dd : "0" + dd[0]);
    return thisDate;
}
function getSubtractDay(dTest) {
    var thisDate = getToDay();
    var tDay = new Date(thisDate);
    var sDay = new Date(dTest);
    var f = 0; //秀出 已經過日期 負號註記
    console.log("sDay " + sDay);
    console.log("TDay " + tDay);
    var difference = Math.abs(sDay - tDay);
    if (sDay - tDay > 0) {
        f = 1;
    } else {
        f = 0;
    }
    days = difference / (1000 * 3600 * 24);
    console.log(days);
    var lb_d = document.getElementById("lb_date");
    lb_d.innerText = "與今天相差天數:" + days + "天";
    if (f == 0) {
        return -days;
    } else {
        return days;
    }
}
