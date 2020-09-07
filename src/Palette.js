import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import './Palette.css'
import Navbar from "./Navbar";

class Palette extends Component {
  state = {
    level: 500,
    colorFormat: 'HEX'
  }

  changeFormat = e => {
    console.log(e.target.value)
    this.setState({colorFormat: e.target.value})
  }

  changeLevel = level => {
    this.setState({level})
  }

  render() {

    const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
      <ColorBox background={color[this.state.colorFormat.toLocaleLowerCase()]} name={color.name}/>
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
      </div>
    );
  }
}

export default Palette;