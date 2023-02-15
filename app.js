// generetPin 
function genaretPin(){
    const rendomPin = parseInt(Math.random()*10000)+'';
    if (rendomPin.length === 4){
        return rendomPin;
    } else {return genaretPin();}
}

function setPin(){
    const getDisplay = document.getElementById('set-pin');
    getDisplay.value = genaretPin();
}

document.getElementById('generate-pin').addEventListener('click', function(){
    setPin()
})

// deliget pin

function deligetPin(){

}

document.getElementById('input-number').addEventListener('click', function(event){
    const btnInput = (event.target.innerText);
   const getInputFilde = document.getElementById('input-numbers').value
    getInputFilde = btnInput;
   
       
       
   
})