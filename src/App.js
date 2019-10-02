import React,{Component} from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component  {
    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyDz6HFUZDQXDADaxOHNW-yXyTS4Q9KBK1I",
            authDomain: "manager-64121.firebaseapp.com",
            databaseURL: "https://manager-64121.firebaseio.com",
            projectId: "manager-64121",
            storageBucket: "",
            messagingSenderId: "687017930282",
            appId: "1:687017930282:web:e2b832cbc8ab7c19c21d53"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <LoginForm/>
            </Provider>
           
        )
    }
   
}

export default App;
