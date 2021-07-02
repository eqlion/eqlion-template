import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Router from "./router";
import { persistor, store } from "./src/store";

const App: FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <NavigationContainer>
                    <Router />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
