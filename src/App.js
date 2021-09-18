import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Theme from "./Theme";
import { ThemeStore } from "./context/ThemeStore";
import { useEffect, useState } from "react";
import { extractHomeInfoOnly } from "./api/fetchFunctions";
import CountryInfo from "./pages/CountryInfo";

function App() {
  useEffect(() => {
    extractHomeInfoOnly().then((res) => setCountries(res));
  }, []);
  const [countries, setCountries] = useState([]);

  return (
    <Router>
      <ThemeStore>
        <Theme>
          <Switch>
            <Route exact path="/">
              <Home countries={countries}></Home>
            </Route>
            <Route exact path="/:countryName">
              <CountryInfo countries={countries}></CountryInfo>
            </Route>
          </Switch>
        </Theme>
      </ThemeStore>
    </Router>
  );
}

export default App;
