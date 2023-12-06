console.log("LINKED");
const baseURL = "https://swapi.dev/api/planets/?search=Alderaan";
const body = document.querySelector("body");

const btn = document.querySelector("button");

let getResidentInfo = (url) => {
  axios.get(url).then((res) => {
    console.log("callback", res.data);
    let h2 = document.createElement("h2");
    h2.textContent = res.data.name;
    body.appendChild(h2);
  });
};

const getResidents = () => {
  axios
    .get(`${baseURL}`)
    .then((res) => {
      console.log(res.data.results[0].residents);
      res.data.results[0].residents.forEach(getResidentInfo);
    })
    .catch((error) => {
      console.log(error);
    });
};

btn.addEventListener("click", getResidents);
