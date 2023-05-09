console.log("Hello Jim");

// const i = 0;
// const j = 0;

// const divTag = document.querySelector(".dance-square");
// const bgColor = ["purple", "yellow", "blue", "brown"]

// function divChange() {
//     divTag.getElementsByClassName.backgroundColor = blue;
//     i = (i + 1) % bgColor.length;
// }

// setInterval(divChange, 2000);

const x = 0;
const colors = ["red", "green", "blue", "purple"]

const squareOne = document.getElementById("square-one");
const squareThree = document.getElementsByClassName("dance-square")[2];
const squaresTwo = document.querySelectorAll(".dance-square")[1];

function chanceColor() {
    var letters = '0123456789ABCDEF'
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}



function changeStyle() {

    squareOne.style.backgroundColor = chanceColor();
    squaresTwo.style.backgroundColor = chanceColor();
    squareThree.style.backgroundColor = chanceColor();
}

// setInterval(changeStyle, 1000);


