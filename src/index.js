import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from "./store/reducer/rootReducer";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose , combineReducers} from 'redux';
import thunk from 'redux-thunk';

// const logger = store => {
//     return next => {
//         return action => {
//             //console.log('[Middleware] Dispatching', action);
//             const result = next(action);
//             //console.log('[Middleware] next state', store.getState());
//             return result;
//         }
//     }
// };
const reducers = combineReducers({rootReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);



