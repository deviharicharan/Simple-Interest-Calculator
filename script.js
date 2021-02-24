function compute() {
    principalBox = document.getElementById('principal');
    var principal = principalBox.value;
    var years = document.getElementById('years').value;
    var rate = document.getElementById('rate').value;
    var a = new Date();
    presentYear = a.getFullYear();
    if (principal <= 0) {
        alert("Enter a postive number ");
        principalBox.focus();
        principalBox.value = "";
    } else {
        var interest = (principal * years * rate) / 100;
        years = parseInt(years);
        years += presentYear;
        document.getElementById("result").innerHTML =
            "If you deposit <b class='color'>" +
            principal +
            "</b>, <br> at an interest rate of <b class='color'>" +
            rate +
            "%</b>. <br>You will receive an amount of <b class='color'>" +
            interest +
            "</b>, <br>in the year <b class='color'> " +
            years + "</b>.";
    }
}

function sliderChange(val) {
    document.getElementById("sliderVal").innerHTML = val + "%";
}