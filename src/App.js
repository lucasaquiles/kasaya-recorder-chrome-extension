
/*global chrome*/

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startRecord,stopRecord } from './actions';
import './App.css';

const mapDispatchToProps = dispatch => 
  bindActionCreators({ startRecord, stopRecord }, dispatch);

const mapStateToProps = store => ({
  status: store.recorderState.isRecording
});

class App extends Component {
  state = {
    status: false
  }

  startRecording = () => {
     
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      var port = chrome.runtime.connect({name: tabs[0].id.toString()});
      port.postMessage({tab: tabs[0].title});
      
      port.onMessage.addListener(function(msg) {
        console.log(msg);

        port.postMessage({answer: "Ok"});
      });
    });
  
    this.setState({
      status: true
    })
  }
  
  render() {

    const {
      startRecord,
      status
    } = this.props;

    if(status) {
      return (
        <div className="App" style={{ padding: '10px' }}>
             <button onClick={() => stopRecord()}>
                stoped record
              </button>
        </div>
      );
    }else{
      return (
        <div className="App" style={{ padding: '10px' }}>
          <button onClick={() => this.startRecording()}>Test</button>
          <button onClick={() => startRecord()}>
            record {status}
          </button>
        </div>
      ) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
