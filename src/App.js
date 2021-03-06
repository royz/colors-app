import React from 'react';
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from "react-router-dom";
import PaletteList from "./PaletteList";

function App() {

  const findPalette = id => {
    return seedColors.find(palette => palette.id === id)
  }

  return (
    <Switch>
      <Route exact path='/' render={routeProps => <PaletteList palettes={seedColors} {...routeProps}/>}/>
      <Route
        exact path='/palette/:id'
        render={routeProps => (
          <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>
        )}/>
    </Switch>
  );
}

export default App;
