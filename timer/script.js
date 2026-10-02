const watch = document.querySelector('.watch')

setInterval(function(){
    let date = new Date();
    watch.textContent= `Current Time: ${date.toLocaleTimeString()}`;
}, 1000)

// for navigation bar

const timerbtn = document.querySelector('#timer')
const stopbtn = document.querySelector('#stopwatch')

const timer = document.querySelector('.timer')
const stopwatch = document.querySelector('.stopwatch')
 


// default one 
// timer.style.display='block'
//     stopwatch.style.display='none'
//     timer.textContent='what is up'

 timer.style.display='flex'
    stopwatch.style.display='none'

timerbtn.addEventListener('click', function(){
    timer.style.display='flex'
    stopwatch.style.display='none'

    

    //login
    
    // timer.textContent='what is up'

})

stopbtn.addEventListener('click', function(){
    stopwatch.style.display='flex'
    timer.style.display='none'

    //logic
    // stopwatch.textContent='nothing is up'


})