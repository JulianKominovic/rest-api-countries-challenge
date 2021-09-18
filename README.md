# Frontend Mentor - Time tracking dashboard solution

[![Netlify Status](https://api.netlify.com/api/v1/badges/7a6e27e7-e858-4249-8683-4eff0307e41e/deploy-status)](https://app.netlify.com/sites/jk-time-tracking-dashboard/deploys)

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

### Desktop

![React-Stylecomponents-solution-1920x1080](D:\Programacion\FRONTEND MENTOR\time-tracking-dashboard-main\time-tracking-dashboard-react-styled-components\images\React-Stylecomponents-solution-1920x1080.png)



### Mobile

![React-Stylecomponents-solution-mobile](D:\Programacion\FRONTEND MENTOR\time-tracking-dashboard-main\time-tracking-dashboard-react-styled-components\images\React-Stylecomponents-solution-mobile.png)



### Links

- Solution URL: [See the challenge here](https://www.frontendmentor.io/solutions/react-js-with-styled-components-and-usecontext-KuCzkZ7yE)
- Live Site URL: [Netlify Host](https://jk-time-tracking-dashboard.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- React useContext



### What I learned

```react
// CONTEXT API from REACT
const Context = React.createContext({});

export function DataTypeProvider({ children }) {
  const [currentDataType, setCurrentDataType] = useState("Daily");
  return (
    <Context.Provider value={{ currentDataType, setCurrentDataType }}>
      {children}
    </Context.Provider>
  );
}
export default Context;
```

### Continued development

- API call to database or something similar.
- Better responsive design.
- More features.
- Working buttons.

## Author

Julian Ezequiel Kominovic.

- Website - [Personal portfolio](https://juliankominovic.github.io/portfolio/)
- Frontend Mentor - [@JulianKominovic](https://www.frontendmentor.io/profile/JulianKominovic)
- Github - [@JulianKominovic](https://github.com/JulianKominovic)
- Linkedin - [@jkominovic](https://www.linkedin.com/in/jkominovic/)
