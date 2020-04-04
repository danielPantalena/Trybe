window.onload = function () {

    if (localStorage) {
        document.body.style.backgroundColor = localStorage.backgroundColor;
        document.body.style.color = localStorage.color;
        document.body.style.fontSize = localStorage.fontSize + "px";
        document.body.style.lineHeight = localStorage.lineHeight + "px";
        document.body.style.fontFamily = localStorage.fontFamily;

        let button = document.getElementById("button")
        button.style.backgroundColor = localStorage.color;
        button.style.color = localStorage.backgroundColor;
    }

    let backGround = document.getElementById("background-input");
    let color = document.getElementById("color");
    let fontSize = document.getElementById("font-size");
    let lineHeight = document.getElementById("line-height");
    let fontFamily = document.getElementById("font-family");

    document.getElementById("button").addEventListener("click", function () {
        if (backGround.value != '') {
            console.log(backGround.value);
            document.body.style.backgroundColor = backGround.value;
            localStorage.backgroundColor = backGround.value;
        }
        if (color.value != '') {
            document.body.style.color = color.value;
            localStorage.color = color.value;
        }
        if (fontSize.value != '') {
            document.body.style.fontSize = fontSize.value + "px";
            localStorage.fontSize = fontSize.value;
        }
        if (lineHeight.value != '') {
            document.body.style.lineHeight = lineHeight.value + "px"
            localStorage.lineHeight = lineHeight.value;
        }
        if (fontFamily.value != '') {
            document.body.style.fontFamily = fontFamily.value;
            localStorage.fontFamily = fontFamily.value;
        }
    })
}