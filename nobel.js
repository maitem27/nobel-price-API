let btn = document.querySelector('#load');
let gallery = document.querySelector('#gallery');



btn.addEventListener('click', () => {
    fetch('https://api.nobelprize.org/2.1/nobelPrizes')
      .then(response => response.json())
      .then(nobel => {
       console.log(nobel)

//       let year = nobel[0].awardyear

//       let nobel = 0;
//       while (nobel < nobel.laureates.length) {
    
//       nobel = nobel + 1;
// }
    });





})