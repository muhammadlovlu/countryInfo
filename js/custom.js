fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => showCountries(data))

const showCountries = countries => {
    const output = document.getElementById("allCountries");
    countries.forEach(country => {
        const createDiv = document.createElement("div");
        createDiv.className = 'country';
        const countryInfo = `
            <h3 class="countryName">${country.name}</h3>
            <p class="capital">${country.capital}</p>
        `;
        createDiv.innerHTML = countryInfo;
        output.appendChild(createDiv);
    });
}





const renderCountryInfo = country => {
    const countryDiv = document.getElementById("countryDetail");
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        </p>Population: ${country.population}</p>
        </p>Area : ${country.area}</p>
        <img src="${country.flag}" />
    `
}