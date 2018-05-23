import * as React from "react";
import * as ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

import { MenuControls as MenuControlsContainer } from "@Components/menu-controls-container";
import { Menu as MenuContainer } from "@Components/menu-container";
import { defaultState, updateState } from "@Reducers/index";

const store = createStore(updateState, defaultState, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
const client = new ApolloClient({
  uri: `${window.location.protocol}//${window.location.host}/api`
});

ReactDom.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <React.Fragment>
        <MenuControlsContainer/>
        <MenuContainer/>
      </React.Fragment>
    </ApolloProvider>
  </Provider>,
  document.getElementById("menu")
);
