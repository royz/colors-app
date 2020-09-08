import React from 'react';
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from "react-router-dom";

function App() {

  const findPalette = id => {
    return seedColors.find(palette => palette.id === id)
  }

  return (
    <Switch>
      <Route exact path='/' render={() => 'hello'}/>
      <Route path='/palette/:id' render={routeProps => <Palette palette={generatePalette(findPalette(
        routeProps.match.params.id
      ))}/>}/>

    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])}/>
    // </div>
  )
    ;
}

export default App;
