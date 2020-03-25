import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/rootReducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes } from 'react95';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
    <Provider store={store}>
        <ResetStyles />
        <ThemeProvider theme={themes.default}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);