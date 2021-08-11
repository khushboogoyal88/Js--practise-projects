const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message)=>{
const formControl = input.parentElement;
formControl.classList.add('error');
const small = formControl.querySelector('small');
small.innerText = message;
}

const showSuccess = (input)=>{
  const formControl = input.parentElement;
  formControl.classList.add('success');
}

//Check email is valid
const checkEmail = (input) =>{
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (re.test(String(input.value).toLowerCase())){
     showSuccess(input)
   }else{showError(input, 'Email is not valid')};
}

//Check if required
const checkRequired = (inputArr) =>{
inputArr.forEach((input)=>{
  if(input.value.trim()===''){
showError(input, `${getFieldName(input)} is required`)
}
else {showSuccess(input);}})
}

//check input length
const checkLength = (input, min, max)=>{
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be least ${min} characters.`);
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be atmost ${max} characters.`
    );
  }
}

const getFieldName = (input) =>{
return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check passwords match
const checkPasswordMatch=(input1, input2)=>{
  if(input1.value !== input2.value){
    showError(input2, 'Passwords do not match')
  }
}

form.addEventListener('submit', (e)=>{
e.preventDefault();
console.log(username.value, email.value, password.value, password2.value);
checkRequired([username, email, password, password2]);
checkEmail(email);
checkLength(username, 5,15);
checkLength(password, 6, 25);
checkPasswordMatch(password, password2);
})