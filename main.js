let screen = document.getElementById('calculation');
let buttons = document.querySelectorAll('input');

let userInput;
let screenValue ='';

buttons.forEach(button => button.addEventListener('click', (e)=> {
	userInput = e.currentTarget.value;
	if (userInput == '*') {
		  userInput = '*';
          screenValue += userInput;
          screen.value = screenValue;
       }
       else if (userInput == '/'){
       	userInput = '/';
       	screenValue += userInput;
       	screen.value = screenValue;
       }
       else if (userInput == '+') {
       	userInput = '+';
       	screenValue += userInput;
       	screen.value = screenValue;
       }
       else if (userInput == '-') {
       	userInput = '-';
       	screenValue += userInput;
       	screen.value = screenValue;
       }
       else if (userInput == '=') {
            screen.value = eval(screenValue);
        }
        else if (userInput == 'AC') {
        	screenValue = '';
        	screen.value = screenValue;
        }
       else {
            screenValue += userInput;
            screen.value = screenValue;
        }
}))
