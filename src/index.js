import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers, {} , applyMiddleware(reduxThunk) );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
