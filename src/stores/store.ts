import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlicer";
import contactReducer from "./features/contact/contactSlicer";
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers({
    theme: themeReducer,
    contact: contactReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: true,
        serializableCheck: false,
        immutableCheck: false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
