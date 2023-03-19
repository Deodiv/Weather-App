fetch("http://api.weatherapi.com/v1/current.json?key=13857fdb8d274be8b94223700231903&q=London&aqi=no")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
