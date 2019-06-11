'use strict';

function randomDogImage(urlNum){

  fetch(`https://dog.ceo/api/breeds/image/random/${urlNum}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson, urlNum))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, urlNum){
    
  let word = `Check out this ${urlNum} dog`;
  if (urlNum > 1){
    word = `Check out these ${urlNum} dogs`;
  }

  $('.results-desc').html(word);

  responseJson.message.forEach(function(dogPic) 
  {$('.results').append(`<img src='${dogPic}' class='results-img'>`);
    console.log(dogPic);
  });
  $('.results').removeClass('hidden');

}

function userSubmit(){
  
  $('form').submit((event=>{
    event.preventDefault(event);
    $('.results-img').remove();
    const userInput = $('.js-dogNumber').val();
    const urlNum = userInput.toString();
    randomDogImage(urlNum);
    
        
  }));
}



$(function (){
  console.log('works');
  userSubmit();
});