const openBtn = document.getElementById("openBtn");
const flap = document.querySelector(".flap");
const envelopeContainer = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const photos = document.getElementById("photos");
const ending = document.getElementById("ending");

/* Open envelope */
openBtn.addEventListener("click",()=>{
  flap.style.transform="rotateX(180deg)";

  setTimeout(()=>{
    envelopeContainer.style.display="none";
    letter.classList.remove("hidden");
  },1000);

  setTimeout(()=>{
    photos.classList.remove("hidden");
  },2500);

  setTimeout(()=>{
    ending.classList.remove("hidden");
  },3000);
});

/* Kisses */
function createKiss(){
  const kiss=document.createElement("div");
  kiss.className="kiss";
  kiss.innerHTML="💋";
  kiss.style.left=Math.random()*window.innerWidth+"px";
  kiss.style.animationDuration=(3+Math.random()*3)+"s";
  document.body.appendChild(kiss);

  setTimeout(()=>kiss.remove(),6000);
}

setInterval(createKiss,300);
