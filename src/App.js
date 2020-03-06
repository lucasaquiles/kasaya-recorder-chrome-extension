import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { recorderButton } from './actions';

import './App.css';

class App extends React.Component {

  inputChange = event => {

    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    
    const {
      recorderButton,
      value
    } = this.props;

    return (
      <div className="App" style={{ padding: '10px' }}>
            
            <button onClick={() => recorderButton(value)}>
               Recorder {value}
            </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ recorderButton }, dispatch);

const mapStateToProps = store => ({
  value: store.recorderState.value
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
