const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getData);

function getData() {
  let country = input.value;
  fetch(`https://covid-193.p.rapidapi.com/history?country=${country}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "ce19d0164fmsh3d383efc0e85ce5p16dcb1jsnb1a4a3c79541",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      let data = json.response[0];
      document.getElementById("active").innerHTML = data.cases.active;
      document.getElementById("new").innerHTML = data.cases.new;
      document.getElementById("recovered").innerHTML = data.cases.recovered;
      document.getElementById("total").innerHTML = data.cases.total;
      document.getElementById("deaths").innerHTML = data.deaths.total;
      document.getElementById("t-test").innerHTML = data.tests.total;
    });
}
