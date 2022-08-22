function validateForm(){
   const form = document.querySelector("form");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        const input = document.querySelectorAll('input');
        let value = [].map.call(input,function(inputValue){
            return inputValue.value
         }) 
         console.log(value)
         return false
    })
};

