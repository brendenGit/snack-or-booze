import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import slugify from 'slugify';
import "./App.css";
import Home from "./components/Home/Home"
import SnackOrBoozeApi from "./Api";
import NavBar from "./components/common/NavBar/NavBar"
import { Route, Switch } from "react-router-dom";
import Menu from "./components/common/Menu/Menu";
import MenuItem from "./components/common/MenuItem/MenuItem";
import NewMenuItemForm from "./components/common/MenuItem/NewMenuItemForm";
import NotFound from "./components/common/NotFound/NotFound";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  async function getSnacks() {
    let snacks = await SnackOrBoozeApi.getSnacks();
    setSnacks(snacks);
    setIsLoading(false);
  }

  async function getDrinks() {
    let drinks = await SnackOrBoozeApi.getDrinks();
    setDrinks(drinks);
    setIsLoading(false);
  }

  useEffect(() => {
    async function getMenus() {
      await getDrinks();
      await getSnacks();
    }
    getMenus();
  }, []);

  async function addNewItem(formData, type) {
    const id = slugify(formData.name, { lower: true });
    const item = { id, ...formData };
    try {
      await SnackOrBoozeApi.addNewItemToDB(item, type);
    } catch (err) {
      console.log(err);
    }
    type === 'snacks' ? await getSnacks() : await getDrinks();
  }

  if (isLoading) {
    return <p>Loading &hel1p;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks.length} drinks={drinks.length} />
            </Route>
            <Route exact path="/snacks/new">
              <NewMenuItemForm addNewItem={addNewItem} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={{ snacks: snacks }} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem items={{snacks: snacks}} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks/new">
              <NewMenuItemForm addNewItem={addNewItem} />
            </Route>
            <Route exact path="/drinks">
              <Menu items={{ drinks: drinks }} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <MenuItem items={{drinks: drinks}} cantFind="/drinks" />
            </Route>
            <Route>
              <NotFound exact path="/not-found"/>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
