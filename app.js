document.querySelector('button').addEventListener('click', searchCity)

function searchCity (){
  let nameOfCity = document.querySelector('input').value 

fetch(`http://api.weatherapi.com/v1/current.json?key=13857fdb8d274be8b94223700231903&q=${nameOfCity}&aqi=no`)
.then(res => res.json())
.then(data => {
  console.log(data);  
  document.querySelector('.location').innerText = data.location.name
})
.catch(err => {
  console.log(`error ${err}`);
});


}









// document.querySelector('button').addEventListener('click', search)

// function search(){
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
// .then(res => res.json())
// .then(data => {
//   console.log(data);
//   document.querySelector('.location').innerText = data.name
// })
// .catch(err => {
//   console.log(`error ${err}`);
// });
// }