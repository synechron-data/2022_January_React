// // 1. Basic Configuration
// import { createStore } from "redux";
// import rootReducer from "../reducers/rootReducer";

// export default function configureStore(preloadedState) {
//     return createStore(
//         rootReducer,
//         preloadedState,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
// }

// // 2. Custom Middleware Configuration
// import { applyMiddleware, createStore } from "redux";
// import rootReducer from "../reducers/rootReducer";

// const customMiddleware = store => next => action => {
//     console.log("Custom Middleware Executed: ", action);
//     next(action);
// }

// export default function configureStore(preloadedState) {
//     return createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(customMiddleware)
//     );
// }

// // 3. Thunk Middleware Configuration
// // npm i redux-thunk
// import { applyMiddleware, createStore } from "redux";
// import thunk from 'redux-thunk';

// import rootReducer from "../reducers/rootReducer";

// export default function configureStore(preloadedState) {
//     return createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(thunk)
//     );
// }

// 3. Thunk Middleware with Redux Devtools Configuration
// npm i redux-thunk
// npm i redux-devtools-extension

import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "../reducers/rootReducer";

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}