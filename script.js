let frontView = document.getElementById('screen');
buttons = document.querySelectorAll('button');



let sValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            sValue += buttonText;
            frontView.value = sValue;
        }
        else if (buttonText == 'C') {
            sValue = "";
            frontView.value = sValue;
        }
        else if (buttonText == '=') {
            if(!frontView.value){
                alert('Incorrect Input')
            }
            else{
                frontView.value = eval(sValue);
               
            }
        }
        else {
            sValue += buttonText;
            frontView.value = sValue;
        }

    })
}

