import React from 'react';
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

class App extends React.Component{

    handleClick = () => {
      AppActions.addItem('this is the item');
    }
    render(){
      return (
        <div className="wrapper">
          <h3 onClick={this.handleClick}>Click this Title, then check console</h3>
        </div>
      )
    }
  }


export default App;
