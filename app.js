let strengthEl = document.getElementById("strength");
let passwordEl = document.getElementById("password");
let messageEl = document.getElementById("message");


passwordEl.addEventListener("input", ()=>{
  if(passwordEl.value.length > 0 ){
    messageEl.style.display = "block"
  }else{
    messageEl.style.display = "none"
  }
  if(passwordEl.value.length < 4){
    strengthEl.innerHTML = "Weak";
    passwordEl.style.borderColor = "#ff5925";
    messageEl.style.color = "#ff5925";
  }
  else if(passwordEl.value.length > 4 && passwordEl.value.length < 8){
    strengthEl.innerHTML = "Medium";
    passwordEl.style.borderColor = "yellow";
    messageEl.style.color = "yellow";
  }
  else if(passwordEl.value.length >= 8){
    strengthEl.innerHTML = "Strong";
    passwordEl.style.borderColor = "green";
    messageEl.style.color = "green";
  }
})