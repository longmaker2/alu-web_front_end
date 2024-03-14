// Changing DOM with closure

const changeMode = (size, weight, transform, background, color) => {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
};

let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

const main = () => {
  //Create and add paragraph in the body
  let paragraph = document.createElement("p");
  let text = document.createTextNode("Welcome Holberton!");
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);

  //Create a buttons
  let buttonSpooky = document.createElement("button");
  let textSpooky = document.createTextNode("Spooky");
  buttonSpooky.setAttribute("onclick", "spooky()");
  buttonSpooky.appendChild(textSpooky);
  document.body.appendChild(buttonSpooky);

  let buttonDark = document.createElement("button");
  let textDark = document.createTextNode("Dark mode");
  buttonDark.setAttribute("onclick", "darkMode()");
  buttonDark.appendChild(textDark);
  document.body.appendChild(buttonDark);

  let buttonScream = document.createElement("button");
  let textScream = document.createTextNode("Scream mode");
  buttonScream.setAttribute("onclick", "screamMode()");
  buttonScream.appendChild(textScream);
  document.body.appendChild(buttonScream);
};

main();
