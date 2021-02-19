fetch ("https://restcountries.eu/rest/v2/all")
.then (res => res.json())
.then (data => showCountries(data))



const showCountries = countries => {
    const output = document.getElementById("allCountries");
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
       const createDiv = document.createElement("div");
       const h3 = document.createElement("h3");
       h3.innerText = country.name;
       const p = document.createElement("p");
       p.innerText = country.capital;
        createDiv.appendChild(h3);
        createDiv.appendChild(p);
        output.appendChild(createDiv);
    }
}
















// fetch("https://restcountries.eu/rest/v2/all")
//     .then(res => res.json())
//     .then(data => displayCountries(data))



// const displayCountries = countries => {
//     const countriesDiv = document.getElementById("countries");
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const countryDiv = document.createElement("div");
//         const h3 = document.createElement("h3");
//         h3.innerText = country.name;
//         const p = document.createElement("p");
//         p.innerText = country.capital;
//         countryDiv.appendChild(h3);
//         countriesDiv.appendChild(countryDiv)
//     }
// }