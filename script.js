const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const title = document.getElementById("title");
const text = document.getElementById("text");
const film = document.getElementById("film");

/* FLOATING KISSES GENERATOR */
const kisses = document.querySelector(".kisses");
for(let i=0;i<40;i++){
 let k=document.createElement("span");
 k.innerHTML="💋";
 k.style.left=Math.random()*100+"vw";
 k.style.animationDuration=10+Math.random()*10+"s";
 k.style.fontSize=16+Math.random()*14+"px";
 kisses.appendChild(k);
}

/* MESSAGE */
const heading = "Happy Valentine's Day Mayank ❤️";

const message = `Happy Valentine’s Day, my love.

I don’t think you realize how much you mean to me.
Even though we are going through a lot right now,
I just want you to know that whether we are meant to be or not,
I love you and I meant it when I said it.

I really wanted to celebrate Valentine’s this year.
I was hoping we could, because we barely get to celebrate
any special days together.

But it seems like the universe had other plans,
so I made this little something for you instead.

I hope you like it, because I’ve been planning this
since before we took a break.

I’m grateful for every laugh,
every conversation,
and every quiet moment we share.

I care about you more than I can ever properly put into words. ❤️`;

/* OPEN ENVELOPE */

openBtn.onclick = () =>{
 envelope.classList.add("open");
 letter.style.display="block";
 typeWriterTitle();
};

let i=0;
let j=0;

function typeWriterTitle(){
 if(i < heading.length){
   title.innerHTML += heading.charAt(i);
   i++;
   setTimeout(typeWriterTitle,80);
 } else{
   typeWriterText();
 }
}

function typeWriterText(){
 if(j < message.length){
   text.innerHTML += message.charAt(j);
   j++;
   setTimeout(typeWriterText,25);
 } else{
   film.style.display="block";
 }
}
