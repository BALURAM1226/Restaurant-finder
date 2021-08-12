import React from 'react';
import './style.css';
import Navbar from './Navbar';
import SearchSection from './Components/SearchSection';
import MenuPage from './Components/MenuPage';
import ApiData from './Components/ApiData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  const [cityName, setCityName] = React.useState('');

  const handleSearch = event => {
    setCityName(event);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/restaurant/:restId">
          <MenuPage />
        </Route>
        <Route exact path="/">
          <Navbar />
          <SearchSection handleSearch={handleSearch} />
          <ApiData cityName={cityName} />
        </Route>
      </Switch>
    </Router>
  );
}
