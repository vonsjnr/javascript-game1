var arr = [];
var arrMultiTwo = [];
var arrMultiThree = [];
var arrMultiFive = [];
var arrMultiSeven = [];
var arrMultiEleven = [];
var allArray = [];
var primeArray = [];
var filteredArr = [];

function showAllCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 2; i < arrEnd; i++) {
        arr.push(i);
    }
}

function multipleTwoCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 2; i < arrEnd; i++) {
        arrMultiTwo.push(i*2);
    }
}

function multipleThreeCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 3; i < arrEnd; i++) {
        arrMultiThree.push(i*3);
    }
}

function multipleFiveCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 5; i < arrEnd; i++) {
        arrMultiFive.push(i*5);
    }
}

function multipleSevenCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 7; i < arrEnd; i++) {
        arrMultiSeven.push(i*7);
    }
}
function multipleElevenCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 11; i < arrEnd; i++) {
        arrMultiEleven.push(i*11);
    }
}

function mergeArr() {
    allArray = arrMultiTwo.concat(arrMultiThree, arrMultiFive, arrMultiSeven, arrMultiEleven);
}

function sortNumbers() {
    allArray.sort(function(a,b) {
        return a-b});
}
function showPrime() {
    primeArray = arr.filter(function(x) {
        return allArray.indexOf(x) < 0;
    });
}
function duplicateFilter() {
    filteredArr = primeArray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
}

function mainFunction() {

    if (document.getElementById("inputValue").value > 10000) {
        alert("Podano zbyt dużą wartość!");
        return;
    }
    else if (document.getElementById("inputValue").value <= 2) {
        alert("Brak liczb pierwszych!");
        return;
    }
    else if (document.getElementById("inputValue").value < 0) {
        alert("Zły numer! Podaj wartość w przedziale od 0 do 10000");
        return;
    }

    showAllCollection();
    multipleTwoCollection ();
    multipleThreeCollection();
    multipleFiveCollection();
    multipleSevenCollection();
    multipleElevenCollection();
    mergeArr();
    sortNumbers();
    showPrime();
    duplicateFilter();

    document.getElementById("resultDiv").style.display = "block";
    document.getElementById("resultField").textContent = filteredArr;
}
document.getElementById("myBtn").addEventListener("click", mainFunction);

