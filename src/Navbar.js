import React, {Component} from 'react';
import Slider from "rc-slider";
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css'

class Navbar extends Component {
  state = {
    snackbarOpen: false
  }
  closeSnackbar = () => {
    this.setState({snackbarOpen: false})
  }

  handleFormatChange = e => {
    this.props.changeFormat(e.target.value)
    this.setState({snackbarOpen: true})
  }

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
        </div>
        <div className="select-container">
          <Select
            value={this.props.format}
            onChange={this.handleFormatChange}
          >
            <MenuItem value={"hex"}>HEX</MenuItem>
            <MenuItem value={"rgb"}>RGB</MenuItem>
            <MenuItem value={"rgba"}>RGBA</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          open={this.state.snackbarOpen}
          autoHideDuration={3}
          message={<span id='message'>Format changed to {this.props.format}</span>}
          ContentProps={{'aria-describedby': 'message'}}
          action={[
            <IconButton onClick={this.closeSnackbar} color={'inherit'}><CloseIcon/></IconButton>
          ]}
        />
      </header>
    );
  }
}

export default Navbar;