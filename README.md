

# Frontend Mentor - REST Countries API with color theme switcher solution

[![Netlify Status](https://api.netlify.com/api/v1/badges/e7fe30b3-a964-4358-a544-c4f121bd2a19/deploy-status)](https://app.netlify.com/sites/jk-api-rest-countries/deploys)

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

### Desktop (light theme)

![](D:\Programacion\FRONTEND MENTOR\rest-countries-api\results\desktop.png)



### Mobile (dark theme)

![](D:\Programacion\FRONTEND MENTOR\rest-countries-api\results\mobile.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/react-with-styled-components-and-usecontext-api-Rsvnd4F-U)
- Live Site URL: [jk-api-rest-countries.netlify.app](https://jk-api-rest-countries.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

- React router DOM
- Context API

### What I learned

Fetching async data with fetch() and promises.

```js
async function fetchAllData() {
      const country = await fetchCountry();
      const borders = await Promise.all([
        country.borders.map((borderCountry) =>
          fetchCountryByCode(borderCountry)
        ),
      ]).then((res) =>
        res[0].map((item) => {
          item.then((resolve) =>
            setCountryBorders((prev) => [...prev, resolve])
          );
        })
      );
    }
```
Using useEffect with dependencies to re-render the same component with different data.

```js
useEffect(() => {
    //ASYNC FETCH DATA
    //SET COUNTRY INFO IN USESTATE()
    //STORES FETCH DATA INTO USESTATE ()
    // REFRESH WHEN THE URL CHANGE
},[countryName])
```


### Continued development

- More country data.
- Maybe some statistics graphs.

### Useful resources

- [Promise all](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) - This helped me out with promises in order to fetch country borders data from API.
- [React Router DOM documentation](https://reactrouter.com/web/api/Link) - React router DOM documentation about url history manipulation and hooks.
- [React's useEffect documentation](https://es.reactjs.org/docs/hooks-effect.html)
- [API's documentation](https://github.com/apilayer/restcountries)



## Author

Julian Ezequiel Kominovic.

- Website - [Personal portfolio](https://juliankominovic.github.io/portfolio/)
- Frontend Mentor - [@JulianKominovic](https://www.frontendmentor.io/profile/JulianKominovic)
- Github - [@JulianKominovic](https://github.com/JulianKominovic)
- Linkedin - [@jkominovic](https://www.linkedin.com/in/jkominovic/)
