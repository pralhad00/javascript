const body = document.querySelector('body')

const form = document.querySelector('form')
 const result =  document.querySelector('.results')
   let errorMsg = document.querySelector('#error')
  
   const reset = document.querySelector('#reset')

form.addEventListener('submit', function(e){
    e.preventDefault();

   const height =  parseFloat(document.querySelector('#height').value)
   const weight = parseFloat (document.querySelector('#weight').value)
  
   


if (height === '' || isNaN(height) || height <= 0 || weight === '' || isNaN(weight) || weight <= 0 || height < 50 || height > 250 ||
     weight < 2 || weight > 300) {
   
     errorMsg.textContent = 'Enter a realistic height (50-250cm) and weight (2-300kg)';
    form.style.display='none'
    errorMsg.style.display='block'
    reset.style.display='block';
    result.style.display='none';
    return;
    

}


//bmi calculation
const bmi = weight/Math.pow(height/100,2)
//result show in page
result.textContent = `your bmi is ${bmi.toFixed(2)}`;
form.style.display='none';
result.style.display='block'
reset.style.display='block'



});

// Reset button 


reset.addEventListener('click', function(e){
    form.style.display ='block';
    result.style.display = 'none'
    errorMsg.style.display = 'none'
    reset.style.display ='none'
    form.reset()



});




