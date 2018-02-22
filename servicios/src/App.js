import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { Home } from './containers';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';

class App extends Component {


  render() {
    const muiTheme = getMuiTheme({
      palette: {
        textColor: cyan500,
      },
      appBar: {
        height: 50,
      },
    });
    return (
        <Provider store={store}>
          <div>
            <MuiThemeProvider muiTheme={muiTheme}>
              <AppBar title="Dictamenes" />
            </MuiThemeProvider>
            <Home title={'Hola mundo'} />
          </div>
        </Provider>


    );
  }
}

export default App;
