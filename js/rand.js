const generateBoxes = (limit, parent) => {
  parent.innerHTML = "";
  const colors = [
    "#577590",
    "#43aa8b",
    "#90be6d",
    "#f9c74f",
    "#f8961e",
    "#f3722c",
    "#f94144"
  ];
  for (i = 0; i < limit; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.height = `${Math.floor(Math.random() * 300 + 50)}px`;
    box.style.width = `${Math.floor(Math.random() * 300 + 50)}px`;
    box.style.top = `${Math.floor(Math.random() * 80)}%`;
    box.style.left = `${Math.floor(Math.random() * 80)}%`;
    parent.appendChild(box);
  }
};

const background = document.querySelector(".bg");

generateBoxes(Math.random() * 50, background);

setInterval(() => {
  generateBoxes(Math.random() * 50, background);
}, 5000)
