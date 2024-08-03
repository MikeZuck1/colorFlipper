const btn = document.querySelector(".btn");
const hexCode = document.querySelector(".hexCode");

const ramdomColorCode = [
  "#FF0000",
  "#2a5320",
  "#105930",
  "#0066b2",
  "#f0ead6",
  "#ff5800",
  "#431426",
  "#e9ff33",
  "#33ffda",
  "#c133ff",
  "#ff33a8",
  "#ff3333",
  "#8dff33",
  "#33ff8a",
  "#33a2ff",
];

btn.addEventListener("click", () => {
    const random = ramdomColorCode[Math.floor(Math.random() * ramdomColorCode.length)]; 
    document.body.style.backgroundColor = random;

    hexCode.textContent = random;
}); 
