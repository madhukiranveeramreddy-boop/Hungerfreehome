// Select each grid item
const donateBtn = document.querySelector('.donate');
const connectBtn = document.querySelector('.connect');
const deliverBtn = document.querySelector('.deliver');
const serveBtn = document.querySelector('.serve');

// Event listeners
donateBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent page reload
  alert("Redirecting to Donate Page...");
  // window.location.href = "donate.html";  // if you have another page
});

connectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert("Opening Chat with Volunteers...");
  // Example: open a chat modal or connect to API
});

deliverBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert("Registering as Delivery Volunteer...");
});

serveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert("Finding Serving Opportunities...");
});
