const text = document.getElementById("text-input");
const showResult= document.getElementById("result");
const checkButton = document.getElementById("check-btn");


function checkPalindrome(str){
  const cleanedText = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reversedText = cleanedText.split('').reverse().join('');

return cleanedText === reversedText;
}

checkButton.addEventListener("click", ()=>{
  if(text.value.trim()===''){
    alert('please input a value');
    return;
  }

  showResult.classList.remove('hidden');

  if(checkPalindrome(text.value)){
showResult.textContent = `${text.value} is a palindrome`
  }else{
    showResult.textContent = `${text.value} is not a palindrome`
  }
});