document.querySelector('button').addEventListener('click', getWeather);

function getWeather() {
  let weather = document.querySelector('input').value;

  fetch(`http://api.weatherapi.com/v1.json?key=13857fdb8d274be8b94223700231903&q=${weather}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      console.log(data.location.name);
      document.querySelector('.degree').innerText = data.location.name;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
