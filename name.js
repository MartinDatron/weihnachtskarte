const name = getNameFromUrl("name") || "ihr Lieben"
const language = getNameFromUrl("lang") || "Frohe Weihnachten, "

const mainEle = document.getElementById("lang");
const nameEle = document.getElementById("name");

createNameSpans(name);
createMainText(language);

const letterEles = document.querySelectorAll(".letter");

console.log(letterEles)

lightUpName(1);

function createMainText(language){
    let htmlStringMain = "";
    if (language == "DE") {
        htmlStringMain = `<span class="mainText">Frohe Weihnachten, </span>`
    } else if (language == "EN") {
        htmlStringMain = `<span class="mainText">Merry Christmas, </span>`
    }
    mainEle.innerHTML = htmlStringMain;
}

function createNameSpans(name) {
    let namenArray = name.split("");
    let htmlString = "";
    namenArray.forEach((letter, index) => {
        htmlString += `<span class="letter" id="letter-${index}">${letter}</span>`
    });
    nameEle.innerHTML = htmlString;
}

function lightUpName(n){
    let length = letterEles.length;
    for(let i = 0; i < length; i++){
        let ele = letterEles[i];
        ele.className = (n + i) % 2 == 0 ? "green" : "red";
        // ternary syntax: Bedingung ? true : falsch;
    }

    setTimeout(function(){
        lightUpName(n + 1);
    }, 500)
}

function getNameFromUrl(queryName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let urlName = urlParams.get(queryName);
    return urlName;
}
