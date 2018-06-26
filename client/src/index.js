import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers/";

// creating store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();

//  https://github.com/singletoncoding/stream-budget-app

//  https://www.youtube.com/watch?v=p0O1VVqRSK0

//  https://www.youtube.com/watch?v=Nsjsiz2A9mg
