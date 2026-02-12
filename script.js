const message = `
Happy Valentine’s Day, my love.

I don’t think you realize how much you mean to me.

Even though we are going through a lot right now,
I just want you to know that whether we are meant to be or not,
I love you and I meant it when I said it.

I really wanted to celebrate Valentine’s this year.
I was hoping we could, because we barely get to celebrate any special days together.

But it seems like the universe had other plans,
so I made this little something for you instead.

I hope you like it, because I’ve been planning this since before we took a break.

I’m grateful for every laugh, every conversation,
and every quiet moment we share.

I care about you more than I can ever properly put into words. ❤️
`;

let index = 0;

function openLetter(){
document.getElementById("envelope").classList.add("open");
typeWriter();
}

function typeWriter(){
if(index < message.length){
document.getElementById("typedText").innerHTML += message.charAt(index);
index++;
setTimeout(typeWriter,40);
}
}

