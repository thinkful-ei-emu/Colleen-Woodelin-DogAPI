'use strict';


function randomDogImage(urlNum){

        fetch(`https://dog.ceo/api/breeds/image/random/${urlNum}`)
        .then(response => response.json())
        .then(responseJson => 
          displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    }


    function displayResults(responseJson){
        console.log(responseJson);

        responseJson.forEach(function)

    }

function userSubmit(){
    $('form').submit((event=>{
        event.preventDefault(event);
        const userInput = $('.js-dogNumber').val();
       const urlNum = userInput.toString();
       randomDogImage(urlNum);
        
    }))
}



$(function (){
    console.log()
    userSubmit();
})