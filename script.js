function showWish() {
  const name = document.getElementById("nameInput").value.trim();
  const wishBox = document.getElementById("wishBox");
  const wishMessage = document.getElementById("wishMessage");

  if (name === "") {
    alert("Please enter your name to receive your Diwali blessing!");
    return;
  }

  wishMessage.innerHTML = `✨ Happy Diwali, <strong>${name}</strong>! May your life sparkle with joy, wisdom, and endless light. ✨`;
  wishBox.classList.remove("hidden");
}

function playMusic() {
  const music = document.getElementById("music");
  music.play().catch(error => {
    console.log("Music playback failed:", error);
    alert("Music couldn't play. Please check your browser settings or file.");
  });
}

function shareOnWhatsApp() {
  const name = document.getElementById("nameInput").value.trim();
  const message = `🪔✨ Happy Diwali, ${name}! 🎆🎇 May your life sparkle with joy, wisdom, and endless light. ✨🪔`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
}
