let word = "";
let result = "";
let shift = 0;

function preload() {
  Caprasimo = loadFont("Caprasimo-Regular.ttf");
}

function setup() {
  let inp = createInput("");
  inp.position(130, 150);
  inp.size(340);
  inp.input(myInputEvent);

  let shiftInp = createInput("");
  shiftInp.position(250, 240);
  shiftInp.size(100);
  shiftInp.input(myShiftEvent);
}

function draw() {
  createCanvas(600, 400);
  background(128, 0, 128);
  fill(225, 225, 225);
  textFont(Caprasimo);
  textSize(30);
  text("CAESAR CIPHER ENCRYPTER", 65, 80);
  textSize(15);
  text("Enter the message that you want encrypted:", 135, 135);
  textSize(15);
  text("Enter the value you would like to shift the alphabet by:", 90, 225);
  textSize(12);
  text("Cannot shift by more than 26.", 215, 275);
  textSize(15);
  text("Your encrypted message: ", 110, 310);
  textSize(30);
  text(result, 350, 315);
}

function myInputEvent() {
  word = this.value().replaceAll(/[^A-Za-z]/g, "");
}

function myShiftEvent() {
  shift = this.value().replaceAll(/[^0-9]/g, "");
  encrypter(word, shift);
}

function encrypter(word, shift) {
  result = "";
  if (shift > 26) {
    result = "INVALID";
  }
  for (i = 0; i < word.length; i++) {
    ascii = int(word.charCodeAt(i));
    if (
      shift <= 26 &&
      ascii >= 97 &&
      ascii <= 122 &&
      ascii + int(shift) > 122
    ) {
      remainder = ascii + int(shift) - 122;
      ascii = remainder + 96;
    } else if (
      shift <= 26 &&
      ascii >= 65 &&
      ascii <= 90 &&
      ascii + int(shift) > 90
    ) {
      remainder = ascii + int(shift) - 90;
      ascii = remainder + 64;
    } else {
      ascii += int(shift);
    }
    letter = String.fromCharCode(ascii);
    result += letter;
  }
}
