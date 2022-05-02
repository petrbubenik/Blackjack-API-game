fetch('https://www.deckofcardsapi.com/api/deck/6cjww8qn4uro/draw/?count=2')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

