const greeting = document.querySelector('.greeting');

const date = new Date();
const hours = date.getHours();

if(hours>=0 && hours<12){
    greeting.innerHTML="Good Morning!";
}
if(hours>=12 && hours<16){
    greeting.innerHTML="Good Afternoon!";
}
if(hours>=16 && hours<= 23){
    greeting.innerHTML="Good Evening!";
}