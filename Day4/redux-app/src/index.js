// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './index.css';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap';
// import RootComponent from './components/root/RootComponent';
// import configureStore from './store/configureStore';

// import * as counterActions from './actions/counterActions';

// ReactDOM.render(
//   <React.StrictMode>
//     <RootComponent />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // const appStore = configureStore();
// // console.log(appStore);
// // console.log(appStore.getState());

// // const appStore = configureStore({ counterReducer: 1000 });
// // console.log(appStore);
// // console.log(appStore.getState());

// const appStore = configureStore();
// console.log("Loaded State", appStore.getState());

// appStore.subscribe(() => {
//   console.log("Store State Change Detected");
//   console.log("New State", appStore.getState());
// });

// // Dispatch actions to modify the store
// // Take the actions to be performed from Action Creator

// let incAction = counterActions.incCounter();
// let decAction = counterActions.decCounter();

// // When we dispatch the action, reducer will take it and modify the store
// appStore.dispatch(incAction);
// appStore.dispatch(incAction);

// appStore.dispatch(decAction);

// ------------------------------------------------ Connect React App to Redux Store
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap';

import RootComponent from './components/root/RootComponent';
import configureStore from './store/configureStore';

const appStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RootComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
