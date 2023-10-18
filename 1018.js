//1
function printHello() {
    console.log('Hello');
    console.log('Good morning');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);
//2
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);
//3
function showMessage(message, from) {
    if (from === undefined) {
      from ='unknown' ;
    }
    console.log('${message} by ${from}');
}
showMessage('Hi');
//4
function printAll(...args) {
    for (let i = 0; i < args.length; i ++){
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');
//5
let globalMessage = 'global';
function printMessage() {
    let message ='hello';
    console.log(message);
    console.log(globalMessage);
    
}
printMessage();
