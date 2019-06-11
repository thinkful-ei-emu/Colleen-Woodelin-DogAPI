'use strict';

function randomNuDogImage(urlNum){
  fetch(`https://dog.ceo/api/breeds/image/random/${urlNum}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson, urlNum))
    .catch(error => alert('Something went wrong. Try again later.'));
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
    const userInput = $('.js-dogNumber').val();
    const urlNum = userInput.toString();
    randomNuDogImage(urlNum);    
  }));
}

function randomDogImage(userSub){
  fetch(`https://dog.ceo/api/breed/${userSub}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      displayResultsBreed(responseJson, userSub);})
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResultsBreed(responseJson, userSub){
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