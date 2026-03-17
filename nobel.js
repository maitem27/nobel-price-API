fetch('https://api.nobelprize.org/2.1/laureates')
    .then(response => response.json())
    .then(nobel =>{
        console.log(nobel)
    })

    