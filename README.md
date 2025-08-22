Counter App

A tiny, stylish counter built with HTML + CSS + JavaScript.
Increment, decrement (no negatives), and reset with smooth UI.

✨ Features

Increment / decrement / reset actions

Prevents negative counts

Modern, centered UI with gradient background

Responsive and keyboard accessible

🧪 Live Preview (optional)

Host with GitHub Pages or any static host.

GitHub Pages: Settings → Pages → Deploy from main → /root

Or open index.html directly in your browser

🗂️ Project Structure
counter-app/
├─ index.html
├─ style.css
└─ script.js

🚀 Getting Started

Download / Clone the repo

Open index.html in your browser
(No build/tools needed—pure static files)

🛠️ How It Works

script.js manages a count variable and updates the text inside #count.

Decrement is guarded so the value never goes below 0.

let counter = document.getElementById("count");
let count = 0;

function increment() {
  count += 1;
  counter.textContent = count;
}

function decrement() {
  if (count > 0) {
    count -= 1;
    counter.textContent = count;
  }
}

function reset() {
  count = 0;
  counter.textContent = count;
}

🎨 Customize

Change the gradient or card style in style.css

Edit button labels or add keyboard shortcuts in index.html / script.js

Want negatives? Remove the if (count > 0) check

♿ Accessibility Tips

Add aria-live="polite" to the counter value for screen readers:

<p id="count" aria-live="polite">0</p>


Ensure buttons have clear text (they do!)

🔮 Possible Improvements

Add step size (+5 / −5)

Add max/min limits

Persist count in localStorage

Add animation when the number changes

