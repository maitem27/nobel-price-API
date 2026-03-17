let btn = document.querySelector('#load');
let gallery = document.querySelector('#gallery');

i=0;

btn.addEventListener('click', () => {
    fetch('https://api.nobelprize.org/2.1/laureates')
      .then(response => response.json())
      .then(nobel => {
        console.log(nobel.laureates,nobel.laureates.length,nobel.laureates.awardYear)
    });





})