// Change the name and optionally the image
const birthdayName = "me"; // Replace with any name
const imageUrl = "Snapchat-1750896842.jpg"; // Replace with your own image file name
const song = document.getElementById("music");

// Set name and photo
document.getElementById("name").innerText = birthdayName;
document.getElementById("photo").src = imageUrl;

// On button click
function playSurprise() {
  const wish = document.getElementById("wish");
  wish.innerText = `Dear ${birthdayName}, may your day be filled with joy, love, and endless blessings! 🎊🎉`;
  wish.classList.remove("hidden");
  song.play();
}
