const colors = [
  {
    name: "red",
    hex: "#cd0000",
  },
  {
    name: "dark-orange",
    hex: "#f03800",
  },
  {
    name: "yellow",
    hex: "#ffb64c",
  },
  {
    name: "orange",
    hex: "#ff9100",
  },
  {
    name: "blue",
    hex: "#0095ff",
  },
  {
    name: "green",
    hex: "#1fbf66",
  },
  {
    name: "light-pink",
    hex: "#ff4380",
  },
  {
    name: "white",
    hex: "#deecf1",
  },
  {
    name: "brown",
    hex: "#714c2f",
  },
  {
    name: "light-green",
    hex: "#7fe881",
  },
  {
    name: "pink",
    hex: "#f7006a",
  },
];
const controls = document.querySelector(".controls");
const buttonBranch = document.createElement("button");
buttonBranch.innerText = "Branch";
buttonBranch.id = "branch";
controls.appendChild(buttonBranch);

const onChangeColor = (nodeElement, color) => {
  if (!currentColor) {
    alert("Please select a color");
    return;
  }
  nodeElement.style.backgroundColor = color;
};

/// add option colors in the select element
let currentColor = "";
const selectColors = document.getElementById("color");
colors.forEach((color) => {
  const option = document.createElement("option");
  option.innerText = color.name;
  option.value = color.hex;
  selectColors.append(option);
});

selectColors.addEventListener("change", (event) => {
  currentColor = event.target.value;
});
/// end

const addListenersToColorChange = () => {
  for (const key in stackButtonAndNodeElement) {
    const { button, nodeElements } = stackButtonAndNodeElement[key];
    button.addEventListener("click", () => {
      nodeElements.forEach((nodeElement) => {
        onChangeColor(nodeElement, currentColor);
      });
    });
  }
};

const ChangeColorColor2Inner = () => {
  const wing = document.getElementById("main-wing-btn");
  wing.addEventListener("click", (event) => {
    if (!currentColor) {
      alert("Please select a color");
      return;
    }
    const wingColorInner2 = document.querySelector(".wing-color2-inner");
    wingColorInner2.style.borderTop = `1.56em solid ${currentColor}`;
    ChangeColorColor2Inner();
  });
};

const stackButtonAndNodeElement = {
  body: {
    button: document.getElementById("body-btn"),
    nodeElements: [document.querySelector(".parrot")],
  },

  wing: {
    button: document.getElementById("main-wing-btn"),
    nodeElements: [
      document.querySelector(".wing-color1"),
      document.querySelector(".wing"),
      ChangeColorColor2Inner(),
    ],
  },
  wingHighlight: {
    button: document.getElementById("sub-wing-btn"),
    nodeElements: [document.querySelector(".wing-color1")],
  },

  upperBeak: {
    button: document.getElementById("upper-beak-btn"),
    nodeElements: [document.querySelector(".beak-upper")],
  },
  lowerBeak: {
    button: document.getElementById("lower-beak-btn"),
    nodeElements: [document.querySelector(".beak-lower")],
  },

  claw: {
    button: document.getElementById("claw-btn"),
    nodeElements: [document.querySelector(".leg")],
  },

  tailWing: {
    button: document.getElementById("tail-wing-btn"),
    nodeElements: [
      document.querySelector(".tail1"),
      document.querySelector(".tail2"),
    ],
  },
  headWing: {
    button: document.getElementById("head-wing-btn"),
    nodeElements: [document.querySelector(".feather")],
  },

  eyePatch: {
    button: document.getElementById("eye-patch-btn"),
    nodeElements: [document.querySelector(".eye-patch")],
  },

  eye: {
    button: document.getElementById("eye-btn"),
    nodeElements: [document.querySelector(".eye")],
  },
  branch: {
    button: document.getElementById("branch"),
    nodeElements: [document.querySelector(".branch")],
  },
};

addListenersToColorChange();
