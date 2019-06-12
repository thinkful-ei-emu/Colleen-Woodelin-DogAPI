'use strict';

function randomNuDogImage(urlNum){
  fetch(`https://dog.ceo/api/breeds/image/random/${urlNum}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error (response.statusText);
    })
    .then(responseJson => displayResults(responseJson, urlNum))
    .catch(err => {
      $('.results-img').remove();
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
  }

function displayResults(responseJson, urlNum){
  let word = `Check out this ${urlNum} dog!`;
  if (urlNum > 1){
    word = `Check out these ${urlNum} dog photos!`;
  }
  $('.results-desc').html(word);
  responseJson.message.forEach(function(dogPic) 
  {$('.results').append(`<img src='${dogPic}' class='results-img'>`);
  });
  $('.results').removeClass('hidden');
}

function userSubmit(){
  $('#js-number').parent().submit((event=>{
    event.preventDefault(event);
    $('.results-img').remove();
    let userInput = $('.js-dogNumber').val();
    if (!userInput){
      userInput = 3;
    };
    const urlNum = userInput.toString();
    randomNuDogImage(urlNum);    
  }));
}

function randomDogImage(userSub){
  fetch(`https://dog.ceo/api/breed/${userSub}/images/random`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error (response.statusText);
    })
    .then(responseJson => displayResultsBreed(responseJson))
    .catch(err => {
      $('.results-img').remove();
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function displayResultsBreed(responseJson){
  let word = 'Check out this cute dog photo!';
  $('.results-desc').html(word);
  let dogPic = responseJson.message;
  $('.results').append(`<img src='${dogPic}' class='results-img'>`);
  $('.results').removeClass('hidden');
}

function byBreed(){
  $('#js-breed').parent().submit((event =>{
    event.preventDefault();
    $('.results-img').remove();
    const userSub = $('.dog-Breed').val();
    randomDogImage(userSub);
  }));
}


$(function(){
  console.log('it is running');
  byBreed(),
  userSubmit();
});