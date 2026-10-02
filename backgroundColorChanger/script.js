// color changer
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')




buttons.forEach( function(btn){
    btn.addEventListener('click', function(e){
       switch (e.target.id) {
        case 'gray':
            body.style.backgroundColor='#595959'
           
            break;
        
        case 'red':
               body.style.backgroundColor='#721D17'
                
            break;

              case 'blue':
               body.style.backgroundColor='#232F44'
                
            break;

              case 'yellow':
               body.style.backgroundColor='#54655D'
                
            break;
       
        default:
            break;
       }
        
        
    })
})

