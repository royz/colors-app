import React, {Component} from 'react';
import Slider from "rc-slider";
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import 'rc-slider/assets/index.css'
import './Navbar.css'

class Navbar extends Component {
  render() {
    const {level, changeLevel} = this.props
    return (
      <header className={'Navbar'}>
        <div className="logo">
          <a href="#">ColorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider defaultValue={level} min={100} max={900} step={100}
                    onAfterChange={changeLevel}/>
          </div>
          <div className="select-container">
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">{this.props.colorFormat}</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.props.colorFormat}
                onChange={this.props.changeFormat}
                label="Color Format"
              >
                <MenuItem value='HEX'>HEX</MenuItem>
                <MenuItem value='RGB'>RGB</MenuItem>
                <MenuItem value='RGBA'>RGBA</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;