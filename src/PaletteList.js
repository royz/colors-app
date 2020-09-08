import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    return (
      <div>
        <MiniPalette/>
        {this.props.palettes.map(palette => (
          <MiniPalette {...palette}/>
        ))}
      </div>
    );
  }
}

export default PaletteList;