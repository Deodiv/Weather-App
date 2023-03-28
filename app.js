fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6b9e0121dfac89ca6d12494666507be9')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(`error ${err}`);
  });


