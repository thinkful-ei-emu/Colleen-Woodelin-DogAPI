'use strict';

function randomDogImage(userSub){
 console.log(userSub);
  fetch(`https://dog.ceo/api/breed/${userSub}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
        console.log(responseJson);
      displayResults(responseJson, userSub)})
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, userSub){
    
  let word = `Check out this ${userSub} dog`;
  if (userSub > 1){
    word = `Check out these ${userSub} dogs`;
  }

  $('.results-desc').html(word);

  let dogPic = responseJson.message

  $('.results').append(`<img src='${dogPic}' class='results-img'>`);
    console.log(dogPic);
 

  

  $('.results').removeClass('hidden');

}


function byBreed(){
    $('form').submit((event =>{
        event.preventDefault();
        const userSub = $('.dog-Breed').val();
        console.log(userSub);
        randomDogImage(userSub);

    }))
}



$(function (){
  console.log('');
//   userSubmit();
  byBreed();

});

