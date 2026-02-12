// ❤️ Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);

// ⌨️ Typing Effect
const text = `Happy Valentine’s Day, my love.  
    I don’t think you realize how much you mean to me. Even though we are going 
    through a lot right now i just want you to know whether we are meant to be or not 
    i love you and meant it when i said it. Also i really wanted to celebrate valentine'
    this year and was hoping cause we barely celebrated any special day but  <s></s>
    seems like the universe doesnt so i just made this lil something for you. I hope you
    like it cause i have been planing this since before we took a break.
    I’m grateful for every laugh, every conversation, and every quiet moment we share.  
    I care about you more than I can ever properly put into words. ❤️`;

let index = 0;
const speed = 40;
const target = document.getElementById("typeText");

function typeWriter() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
