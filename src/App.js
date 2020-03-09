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
          <button onClick={() => startRecord()}>
            record {status}
          </button>
        </div>
      ) 
    }
  }
}

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
  console.log("something happening from the extension");
  var data = request.data || {};

  var linksList = document.querySelectorAll('a');
  [].forEach.call(linksList, function(header) {
      header.innerHTML = request.data;
  });
  sendResponse({data: data, success: true});
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
