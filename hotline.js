const heartIcons = document.querySelectorAll("#hotline-box .fa-heart");

const heartCounterBox = document.querySelector(
  "div.flex.items-center.bg-green-50.px-3.py-1.rounded-full:nth-child(1)"
);
const heartCountSpan = heartCounterBox.firstChild;
let heartCount = 0;

// --- Heart button Functionality ---
heartIcons.forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountSpan.textContent = heartCount;
  });
});

const coinBox = document.querySelector(
  "div.flex.items-center.bg-green-50.px-3.py-1.rounded-full:nth-child(2)"
);
const coinSpan = coinBox.firstChild;
let coins = 100;

const callButtons = document.querySelectorAll(
  "#hotline-box button.bg-green-600"
);

// --- Call Functionality ---
callButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".bg-white"); // current card
    const serviceName = card.querySelector("h3").textContent;
    const serviceNumber = card.querySelector("h2").textContent;

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinSpan.textContent = coins;

    // Alert
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // Current Time
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // Add to call history
    const li = document.createElement("li");
    li.className = "flex justify-between";
    li.innerHTML = `${serviceName} - ${serviceNumber} <span>${timeString}</span>`;
    historyList.prepend(li);
  });
});
