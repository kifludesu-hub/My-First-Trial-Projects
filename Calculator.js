let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
       
        if (value == '=') {
            try {
                if(string===""
                ){return;}
                string = eval(string);
                input.value = string;
                string= input.value;
            } catch (error) {
                 input.value = "Invalid Operation!";
                 string = "";
                return;
            }
        } 
        else if (value == 'C') {
            string = "";
            input.value = "";
        }
        else if (value =='×'){
            string =string.slice(0, (string.length-1));
            input.value=string;
        }
        else {
            string += value;
            input.value = string;
        }
    });
});