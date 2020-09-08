import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import './Palette.css'
import Navbar from "./Navbar";

class Palette extends Component {
  state = {
    level: 500,
    colorFormat: 'hex'
  }

  changeFormat = format => {
    this.setState({colorFormat: format})
  }

  changeLevel = level => {
    this.setState({level})
  }

  render() {

    const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
      <ColorBox
        background={color[this.state.colorFormat.toLocaleLowerCase()]}
        name={color.name}
        key={color.id}
      />
    ))
    return (
      <div className={"Palette"}>
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevel}
          format={this.state.colorFormat}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <footer className="Palette-footer">
          {this.props.palette.paletteName}
          <span className="emoji">{this.props.palette.emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;