
var password = document.getElementById("password");
var Pmessage = document.getElementById("Pmessage");
var button = document.getElementById("button");
// password.onfocus = function () {
//     document.getElementById("Pmessage").style.display = "block";
// }
// password.onblur = function () {
//     document.getElementById("Pmessage").style.display = "none";
// }
password.onkeyup = function () {
    var expression = "(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{8,}"
    if (password.value.match(expression)) {

        Pmessage.classList.remove("show");
        Pmessage.classList.add("hide-input");
        button.classList.remove("button-disabled");
        button.classList.add("button");
        button.disabled = false;
    } else {
        Pmessage.classList.remove("hide-input");
        Pmessage.classList.add("show");
        button.classList.remove("button");
        button.classList.add("button-disabled");
        button.disabled = true;
    }
}
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
var above = document.getElementById("above");
year.onkeyup = function () {
    leaveChange();
}
function leaveChange() {
    var days = day.value;
    var months = month.value;
    var years = year.value;
    if (months == 2) {
        if (days > 28) {
            if ((years % 4) == 0 && years > 0) {
                if (days > 29) {
                    day.value = 29;
                }
            }
            else {
                day.value = 28;
            }
        }
    }
    else if (months == 4) {
        if (days > 30) {
            day.value = 30;
        }
    }
    else if (months == 6) {
        if (days > 30) {
            day.value = 30;
        }
    }
    else if (months == 9) {
        if (days > 30) {
            day.value = 30;
        }
    }
    else if (months == 11) {
        if (days > 30) {
            day.value = 30;
        }
    }
    if (years > 0) {
        const d = new Date();
        let Cday = d.getDate();
        let Cmonth = d.getMonth() + 1;
        let Cyear = new Date().getFullYear();
        console.log(Cday + " " + Cmonth + " " + Cyear)
        console.log((Cyear - years));
        if ((Cyear - years) == 18) {
            console.log("Year == 18");
            if (Cmonth == months) {
                console.log("Months Equal");
                if (Cday >= days) {
                    above.classList.remove("invalid-date");
                    above.classList.add("invalid-date-hide");
                    button.classList.remove("button-disabled");
                    button.classList.add("button");
                    button.disabled = false;
                    console.log("CDay >= Day");
                }
                else {
                    above.classList.add("invalid-date");
                    above.classList.remove("invalid-date-hide");
                    button.classList.remove("button");
                    button.classList.add("button-disabled");
                    button.disabled = true;
                    console.log("Day");
                }
            }
            else if (Cmonth > months) {
                above.classList.add("invalid-date-hide");
                above.classList.remove("invalid-date");
                button.classList.remove("button-disabled");
                button.classList.add("button");
                button.disabled = false;
                console.log("CMonth > Month");
            }
            else {
                above.classList.remove("invalid-date-hide");
                above.classList.add("invalid-date");
                button.classList.remove("button");
                button.classList.add("button-disabled");
                button.disabled = true;
                console.log("CMonth < Month");
            }
        }
        else if ((Cyear - years) < 18) {
            above.classList.remove("invalid-date-hide");
            above.classList.add("invalid-date");
            button.classList.remove("button");
            button.classList.add("button-disabled");
            button.disabled = true;
            console.log("Year < 18 ");
        }
        else {
            above.classList.remove("invalid-date");
            above.classList.add("invalid-date-hide");
            button.classList.remove("button-disabled");
            button.classList.add("button");
            button.disabled = false;
            console.log("Year > 18");
        }
    } else {
        button.classList.remove("button");
        button.classList.add("button-disabled");
        button.disabled = true;
    }
}