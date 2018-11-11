var counter = 0;

var targetNumber = [];
var randomNum = Math.floor(Math.random()*120) + 9;
targetNumber.push(randomNum);
$("#numberToGuess").text(targetNumber);

var img1 = "./assets/images/purpleCrystals.jpg";
var img2 = "./assets/images/yellowCrystals.jpg";
var img3 = "./assets/images/blueCrystals.jpg";
var img4 = "./assets/images/greenCrystals.jpg";

var images = [img1, img2, img3, img4];

var numberOptions = [];

var randomNum1 = Math.floor(Math.random() * 12) + 1;
var randomNum2 = Math.floor(Math.random() * 12) + 1;
var randomNum3 = Math.floor(Math.random() * 12) + 1;
var randomNum4 = Math.floor(Math.random() * 12) + 1;

numberOptions.push(randomNum1, randomNum2, randomNum3, randomNum4);

var wins = "0";
$("#winsDiv").text(wins);

var losses = "0";
$("#lossDiv").text(wins);

var oldArray = [];
var oldNumOptions= [];

function restartGame() {
    counter = 0;
    $("#counter").html(counter);

    oldNumOptions = numberOptions;

    numberOptions = [];

    randomNum1 = Math.floor(Math.random() * 12) + 1;
    randomNum2 = Math.floor(Math.random() * 12) + 1;
    randomNum3 = Math.floor(Math.random() * 12) + 1;
    randomNum4 = Math.floor(Math.random() * 12) + 1;

    numberOptions.push(randomNum1, randomNum2, randomNum3, randomNum4);

    $.each($(".crystal-image"), function (index, item) {
        $(item).attr("data-crystalvalue", numberOptions[index]);
    });

    oldArray = targetNumber;

    var targetNumber = [];
    var randomNum = Math.floor(Math.random()*120) + 9;
    targetNumber.push(randomNum);
    $("#numberToGuess").text(targetNumber);

};

restartGame();

for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.attr("src", images[i]);

    imageCrystal.addClass("crystal-image");
    imageCrystal.addClass("img-fluid");


    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
};


$(".crystal-image").on("click", function clickCrystals() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);

    counter += crystalValue;
    $("#counter").text(counter);

    if (counter==targetNumber) {
        console.log("You win!")

        setTimeout( function () {
            restartGame();
        },100)

        var wins = ("wins" + 1);
        wins = parseInt(wins);
    }
    else if (counter>=targetNumber) {
        console.log("You lose.")
        
        setTimeout( function () {
            restartGame();
        },100)
    };
});
