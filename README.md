# Demo
    just a test demo  
 ## Js sample
```javascript
    function changeBGColor(colorName){
        body.style.backgroundColor=colorName;
}
```
## HTML sample
```HTML
    <div class="container divv" id="colorDiv">
            <button onclick="changeBGColor('Blue');">Blue</button>
            <button onclick="changeBGColor('Red');">Red</button>
            <button onclick="changeBGColor('Green');">Green</button>
            <button onclick="randomcolor();">random</button>
            <button onclick="navbarClose();">開關navbar</button>
    </div>
```
## HTML Tips
```HTML
    <label for="game1">終極密碼:</label>
    <input type="text" id="game1">
```
* for屬性可以讓她指到對應ID讓使用找到input框

## JQ 選擇器
```javascript
    $('#game1').val(0);
    $('#lb_game1').text("");
```
* val() 可設定value值  
  text() 可設定innertext