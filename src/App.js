/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

// import { errorsClean, fetchData } from './store/errors/Actions';
import { fetchData } from './store/users/Actions';


export class App extends Component {
	constructor(props) {
    super(props);
    const {fetchData } = this.props;
    
    fetchData();
  }

  render(){
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           <code>state:{JSON.stringify(this.state)}</code>
          </p>
         
        </header>
      </div>
    );
  }


};

export const mapStateToProps = state => ({
	...state
	
});
export const mapDispatchToProps = (dispatch) => ({
  // errorsClean: (payload) => dispatch(errorsClean(payload)),
  fetchData: (payload) => dispatch(fetchData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);