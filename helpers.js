let fare = document.querySelector('.fare');
let origin = document.querySelector('.origin');
let dest = document.querySelector('.dest');

const url = 'http://api.bart.gov/api/sched.aspx?cmd=fare&orig=';

function getFares() {
  console.log(
    url + origin + '&dest=' + dest + '&date=now&key=MW9S-E7SL-26DU-VV8V&json=y'
  );
  axios
    .get(
      url +
        origin.value +
        '&dest=' +
        dest.value +
        '&date=now&key=MW9S-E7SL-26DU-VV8V&json=y'
    )
    .then(function(response) {
      console.log(response);
      fare.innerHTML = `Fare: $${
        response.data.root.trip.fare
      } </br> Clipper Discount: $${response.data.root.trip.discount.clipper}`;
    })
    .catch(console.log('error'));
}

var data = document.querySelector('.getData');
data.addEventListener('click', getFares);
