import React, {Component} from 'react';
import './ColorBox.css'
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

class ColorBox extends Component {
  state = {copied: false}

  render() {
    const {name, background} = this.props;

    const changeCopyState = () => {
      this.setState({copied: true})
      setTimeout(() => this.setState({copied: false}), 1500)
    }

    return (
      <CopyToClipboard text={background} onCopy={changeCopyState}>
        <div style={{background}} className={'ColorBox'}>
          <div style={{background}} className={`copy-overlay ${this.state.copied && 'show'}`}/>
          <div className={`copy-message ${this.state.copied && 'show'}`}>
            <h1>COPIED</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">
              COPY
            </button>
          </div>
          <span className={'see-more'}>MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;