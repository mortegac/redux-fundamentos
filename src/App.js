/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

// import { fetchData } from './store/users/Actions';


export class App extends Component {
	constructor(props) {
    super(props);
    // const {fetchData } = this.props;
    
    // fetchData();
  }

  render(){
    
    const {users } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <pre>state:{JSON.stringify(users.list[0], undefined, 2)}</pre>

         
        </header>
      </div>
    );
  }


};

export const mapStateToProps = state => ({
	users: state.users,
	
});
export const mapDispatchToProps = (dispatch) => ({
  // fetchData: (payload) => dispatch(fetchData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);