const url = new URL("https://api.openweathermap.org/data/2.5/weather");
const params = {
    appid: "4b5774e9f3d2a07b84f0f2f88e486224",
    q: "London"
};
const qs = new URLSearchParams(params);


const promiseFetch = fetch(`${url}?${qs}`, {
    method: "GET"
});

const returnJsonResult = r => {
    const result = r.json();
    return result;
}

promiseFetch
    .then(returnJsonResult)
    .then(json => {
        const weather = json.weather[0].description;

        const root = document.getElementById("root");

        root.innerHTML = `<p>${weather}<p>`;

    });