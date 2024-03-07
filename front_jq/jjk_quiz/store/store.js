import { configureStore } from "@reduxjs/toolkit";
import sliceDTE from "./slicePData";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, sliceDTE)

const store = configureStore({ reducer: {pData: persistedReducer},  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),})
export default store
export const persistor = persistStore(store)