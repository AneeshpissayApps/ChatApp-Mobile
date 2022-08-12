import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { LoadingIndicator } from "./src/components/LoadingIndicator";
import { persistor, store } from "./src/stores/store";

const StorePersist = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingIndicator />} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}

export default StorePersist;