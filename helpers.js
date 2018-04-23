let fare = document.querySelector('.fare');
let origin = document.querySelector('.origin');
let dest = document.querySelector('.dest');

const url = 'https://api.bart.gov/api/sched.aspx?cmd=fare&orig=';

function getFares() {
  console.log(
    url +
      origin.value +
      '&dest=' +
      dest.value +
      '&date=now&key=MW9S-E7SL-26DU-VV8V&json=y'
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
      fare.innerHTML = `<strong>Fare Estimate: $${
        response.data.root.trip.fare
      }</strong>`;
      // </br> Clipper Discount: $${response.data.root.trip.discount.clipper}`;
    })
    .catch(console.log('error'));
}

var data = document.querySelector('.getData');
data.addEventListener('click', getFares);
