import React from 'react';
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path='/' render={()=> 'hello'}/>
      <Route exact path='/palette/:id' render={()=> 'hello 2'}/>
    </Switch>

  // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])}/>
    // </div>
)
  ;
}

export default App;
