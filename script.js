const openBtn=document.getElementById("openBtn");
const envelope=document.getElementById("envelopeBox");
const scroll=document.getElementById("scrollBox");
const title=document.getElementById("title");
const message=document.getElementById("message");
const photos=document.getElementById("photos");

const textTitle="Happy Valentine's Day Mayank ❤️";

const letter=`
Happy Valentine’s Day, my love.

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

I care about you more than I can ever properly put into words. ❤️
`;

openBtn.onclick=()=>{
  envelope.style.display="none";
  scroll.style.display="block";
  typeWriterTitle();
};

let i=0;
function typeWriterTitle(){
 if(i<textTitle.length){
   title.innerHTML+=textTitle.charAt(i);
   i++;
   setTimeout(typeWriterTitle,60);
 } else{
   typeWriterMessage();
 }
}

let j=0;
function typeWriterMessage(){
 if(j<letter.length){
   message.innerHTML+=letter.charAt(j);
   j++;
   setTimeout(typeWriterMessage,25);
 } else{
   photos.style.display="flex";
 }
}

/* Floating kisses */

function createKiss(){
 const kiss=document.createElement("div");
 kiss.className="kiss";
 kiss.innerHTML="💋";
 kiss.style.left=Math.random()*100+"vw";
 kiss.style.animationDuration=6+Math.random()*4+"s";
 document.body.appendChild(kiss);
 setTimeout(()=>kiss.remove(),10000);
}

setInterval(createKiss,300);
