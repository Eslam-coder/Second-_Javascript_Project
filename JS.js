function animatedForm() {
    const arrows=document.querySelectorAll('.fa-arrow-down')
    
    arrows.forEach(arrow=>{
        arrow.addEventListener("click",()=>{
            const input = arrow.previousElementSibling;
            console.log(input);
            const parent = arrow.parentElement;
            console.log(parent);
            const nextForm = parent.nextElementSibling;
            console.log(nextForm);

            //Check For Validation UserName 
            if(input.type==='text' && ValidatorUser(input)){
               console.log('Okay')
               nextSlide(parent,nextForm);
            }
            //Check For Validation UserName 
            else if(input.type==='email' && Validatoremail(input)){
                nextSlide(parent,nextForm);
            }
            //Check For Validation Password 
            else if(input.type==='password' && ValidatorUser(input)){
                nextSlide(parent,nextForm);
            }
            else{
                parent.style.animation='shake 0.5s ease'
            }
            //To remove animation and repeat animation
            parent.addEventListener("animationend",()=>{
                parent.style.animation="";
            })
        })
    })
}

//Calling Function 
animatedForm();

//Validation for Username && Password
function ValidatorUser(user) {
    if(user.value.length<6){
        console.log('not enough characters');
        //Calling Function Error
        error('rgb(189,87,87)')
    }
    else{
        //Calling Function Error
        error('rgb(87,189,30)');
        return true;
    }
}

//Validation for Email
function Validatoremail(email) {
    const validation = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if(validation.test(email.value)){
         //Calling Function Error
         error('rgb(87,189,30)');
         return true;
    }
    else{
        //Calling Function Error
        error('rgb(189,87,87)')
    }
}

function nextSlide(parent,nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
    nextForm.classList.remove('inactive');
}

function error(color) {
    document.body.style.backgroundColor=color;    
}