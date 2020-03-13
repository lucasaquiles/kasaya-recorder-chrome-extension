
/*global chrome*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startRecord, stopRecord } from './actions';
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

  stopRecording = () => {

    const code = `
      (function updateStorage(){
        
        const requestedUrl = window.location.href;

        return localStorage.getItem(requestedUrl);
      });
    `;

    this.props.stopRecord()
  }

  startRecording = () => {

    const code = `
      (function getContent(){

        const requestedUrl = window.location.href;
        var element;
        document.addEventListener("click", function(event) {  
            
            event.preventDefault();
            element = event.target;

            var obj = {
              tag: element.tagName,
              value: element.textContent
            };
            console.log(obj);

            if(!localStorage.getItem(requestedUrl)) {
              let item = new Array(obj);
              localStorage.setItem(requestedUrl, JSON.stringify(item))
            } else {

              var local = localStorage.getItem(requestedUrl);
              let array = JSON.parse(local)
              array.push(obj);
              
              localStorage.setItem(requestedUrl, JSON.stringify(array));
            }

            localStorage.getItem(requestedUrl);  
        }, false);
        
        const el  = {
          url: requestedUrl,
          json: localStorage.getItem(requestedUrl)
        };

        return el
      })();
      `;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

      var port = chrome.runtime.connect({ name: tabs[0].id.toString() });
      // port.postMessage({tab: tabs[0].title});

      var obj = { "tab": tabs[0].title };
      localStorage.setItem(tabs[0].id, obj);

      chrome.tabs.executeScript(tabs[0].id, { code }, function (result) {

        console.log("ok", result);

        port.postMessage({ tab: result });
      });

      port.onMessage.addListener(function (msg) {

        console.log("no app: ", msg);

        port.postMessage({ answer: "Ok" });
      });

    });

    this.props.startRecord()
  }

  render() {

    if (this.props.status) {
      return (
        <div className="App" style={{ padding: '10px' }}>
          <button onClick={() => stopRecord()}>
            Pause
              </button>
        </div>
      );
    } else {
      return (
        <div className="App" style={{ padding: '10px' }}>
          <button onClick={() => this.startRecording()}>Record</button>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
