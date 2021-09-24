const birthDate = document.querySelector("#birthdate");
const luckyNo = document.querySelector("#lucky-no");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");
const cancelButton = document.querySelector("#cancel");
const privacyMessage = document.querySelector("#privacy");
let happyAnimationsDiv = document.querySelector('.happy-animation');
let sadAnimationsDiv = document.querySelector('.sad-animation');


function checkBirthDateIsLucky()
{   
    const dob = birthDate.value;
    const luckyNum = luckyNo.value;

    const sum = calculate(dob);  
    if(sum && luckyNum)
    compare(sum, luckyNum);
    else 
    outputBox.innerText = "Please fill both the fields.";
}

function compare(sum, luckyNum)
{
    if(sum % luckyNum === 0) {
        outputBox.style.display = 'block';

		happyAnimationsDiv.style.display = 'block';
		sadAnimationsDiv.style.display = 'none';
        outputBox.innerText = "Yaay, your birthdate is lucky."; 
    } else {
        outputBox.style.display = 'block';

		happyAnimationsDiv.style.display = 'none';
		sadAnimationsDiv.style.display = 'block';

		outputBox.innerText = "Whoops, Your birthdate is unlucky.";
    }           
}
    

function calculate(dob)
{
    let total = 0;
    dob = dob.replaceAll("-","");
    for(let i=0; i<dob.length; i++)
    {
        total += Number(dob.charAt(i)); 
    }
    return total;
}

checkButton.addEventListener("click", checkBirthDateIsLucky);
cancelButton.addEventListener("click" , function hideMessage()
{
    privacyMessage.style.display = 'none';
});
