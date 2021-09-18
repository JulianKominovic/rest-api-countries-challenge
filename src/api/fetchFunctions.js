const fetchAllData = () => {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((res) => res);
};

const extractHomeInfoOnly = () => {
  return fetchAllData().then((res) =>
    res.map((item) => {
      return {
        name: item.name,
        pop: item.population,
        region: item.region,
        capital: item.capital,
        flagUrl: item.flag,
        code: item.alpha3Code,
      };
    })
  );
};

const fetchCountryByName = (countryName) => {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(
    (res) => res.json()
  );
};

const fetchCountryByCode = (code) => {
  return fetch(`https://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`)
    .then((res) => res.json())
    .catch((e) => console.log);
};

export {
  fetchAllData,
  extractHomeInfoOnly,
  fetchCountryByName,
  fetchCountryByCode,
};
