// ===============================
// ENGAGEMENT INVITATION SETTINGS
// ===============================
const invitation = {
  personOne: "Ayaan",
  personTwo: "Maira",
  date: "2026-12-18T19:30:00+05:00"
};

// Put names everywhere
["personOne", "personOne2", "personOne3"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.textContent = invitation.personOne;
});
["personTwo", "personTwo2", "personTwo3"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.textContent = invitation.personTwo;
});

// Opening animation
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const main = document.getElementById("invitation");

openBtn.addEventListener("click", () => {
  opening.animate(
    [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(1.05)" }
    ],
    { duration: 800, easing: "ease-in-out", fill: "forwards" }
  );

  setTimeout(() => {
    opening.classList.add("hidden");
    main.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 750);
});

// Countdown
const target = new Date(invitation.date).getTime();

function updateCountdown() {
  const now = Date.now();
  let distance = target - now;

  if (distance < 0) distance = 0;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// RSVP demo
document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("guestName").value.trim();
  const attendance = document.getElementById("attendance").value;
  const message = document.getElementById("formMessage");

  message.textContent =
    `Thank you, ${name}! Your response "${attendance}" has been recorded for this demo.`;

  this.reset();
});
