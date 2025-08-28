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
    const card = e.target.closest(".bg-white");
    const serviceName = card.querySelector("h3").textContent;
    const serviceNumber = card.querySelector("span").textContent;

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinSpan.textContent = coins;

    // Alert
    alert(`Calling ${serviceName} at ${serviceNumber} `);

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
    li.className =
      "flex justify-between items-center bg-green-50 p-3 rounded-xl mb-2";

    li.innerHTML = `<p class="font-semibold">${serviceName}<br>
    <span class="text-sm text-gray-600">${serviceNumber}</span>
    </p>
    <span class="text-sm text-gray-700">${timeString}</span>`;

    historyList.prepend(li);
  });
});

// --- Copy Functionality ---

let copyCount = 0;

document.querySelectorAll(".copyBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const numberText =
      this.closest(".bg-white").querySelector(".numberElement").innerText;

    // Clipboard copy
    navigator.clipboard.writeText(numberText).then(() => {
      copyCount++;
      document.getElementById("copyCount").innerText = copyCount;

      alert("Copied: " + numberText);
    });
  });
});

// --- Clear History ---
const historyList = document.querySelector("#history-box ul");
const clearHistoryBtn = document.querySelector("#history-box button");
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
