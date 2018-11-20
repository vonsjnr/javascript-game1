var arr = [];
var arrMultiTwo = [];
var arrMultiThree = [];
var arrMultiFive = [];
var arrMultiSeven = [];
var arrMultiEleven = [];
var allArray = [];

function multipleTwoCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 2; i < arrEnd; i++) {
        arrMultiTwo.push(i*2);
    }
    document.getElementById("resultField2").innerHTML = arrMultiTwo;
}

function multipleThreeCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 3; i < arrEnd; i++) {
        arrMultiThree.push(i*3);
    }
    document.getElementById("resultField5").innerHTML = arrMultiThree;
}
function multipleFiveCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 5; i < arrEnd; i++) {
        arrMultiFive.push(i*5);
    }
    document.getElementById("resultField6").innerHTML = arrMultiFive;
}
function multipleSevenCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 7; i < arrEnd; i++) {
        arrMultiSeven.push(i*7);
    }
    document.getElementById("resultField7").innerHTML = arrMultiSeven;
}
function multipleElevenCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 11; i < arrEnd; i++) {
        arrMultiEleven.push(i*11);
    }
    document.getElementById("resultField8").innerHTML = arrMultiEleven;
}

function mergeArr() {
    allArray = arr.concat(arrMultiTwo, arrMultiThree, arrMultiFive, arrMultiSeven, arrMultiEleven);
    document.getElementById("resultField3").innerHTML = allArray;
}

function sortNumbers() {
    allArray.sort(function(a,b) {
        return a-b});
    document.getElementById("resultField4").innerHTML = allArray;
}
function countPrime() {
    var newArr = arr;
    var h,i,j;

    for(h = 0; h < arr.length; h++) {
        var curItem = arr[h];
        var foundCount = 0;
        // search array for item
        for(i = 0; i < arr.length; i++) {
            if (arr[i] == arr[h])
                foundCount++;
        }
        if(foundCount > 1) {
            // remove repeated item from new array
            for(j = 0; j < newArr.length; j++) {
                if(newArr[j] == curItem) {
                    newArr.splice(j, 1);
                    j--;
                }
            }
        }
    }
    console.log(newArr);
}

function arrayFilter(){
    var unique = allArray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
    document.getElementById("resultField11").innerHTML = unique;
}


function showPrime() {
    multipleTwoCollection ();
    multipleThreeCollection();
    multipleFiveCollection();
    multipleSevenCollection();
    multipleElevenCollection();
    mergeArr();
    sortNumbers();
    arrayFilter();
}
document.getElementById("myBtn").addEventListener("click", showPrime);

function showCollection() {
    var arrEnd = document.getElementById("inputValue").value;

    for(var i = 0; i < arrEnd; i++) {
        arr.push(i);
    }
    document.getElementById("resultField").innerHTML = arr;
}
document.getElementById("myBtn2").addEventListener("click", countPrime);
document.getElementById("myBtn3").addEventListener("click", showCollection);
