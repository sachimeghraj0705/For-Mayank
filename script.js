const kissesContainer = document.querySelector(".kisses");
for(let i=0;i<35;i++){
 let k=document.createElement("span");
 k.innerHTML="💋";
 k.style.left=Math.random()*100+"vw";
 k.style.animationDuration=10+Math.random()*10+"s";
 k.style.fontSize=18+Math.random()*12+"px";
 kissesContainer.appendChild(k);
}

/* TEXT */

const heading="Happy Valentine's Day Mayank ❤️";

const message=`Happy Valentine’s Day, my love.

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

/* OPEN */

const btn=document.getElementById("openBtn");
const env=document.getElementById("envelopeBox");
const scroll=document.getElementById("scroll");
const title=document.getElementById("title");
const text=document.getElementById("text");
const film=document.getElementById("film");

btn.onclick=()=>{
 document.querySelector(".envelope").classList.add("open");
 setTimeout(()=>{
   env.style.display="none";
   scroll.style.display="block";
   typeTitle();
 },1200);
};

let i=0,j=0;

function typeTitle(){
 if(i<heading.length){
   title.innerHTML+=heading[i++];
   setTimeout(typeTitle,80);
 }else{
   typeText();
 }
}

function typeText(){
 if(j<message.length){
   text.innerHTML+=message[j++];
   setTimeout(typeText,25);
 }else{
   film.style.display="block";
 }
}
