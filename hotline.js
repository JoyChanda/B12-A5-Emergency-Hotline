// --- Select Elements ---
const heartIcons = document.querySelectorAll("#hotline-box .fa-heart");

const heartCounterBox = document.querySelector(
  "div.flex.items-center.bg-green-50.px-3.py-1.rounded-full:nth-child(1)"
);
const heartCountSpan = heartCounterBox.firstChild; // heart count
let heartCount = 0;

// --- Heart Functionality ---
heartIcons.forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountSpan.textContent = heartCount;
  });
});
