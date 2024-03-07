import { Provider } from "react-redux";
import store, {persistor} from "../store/store"
import { PersistGate } from "redux-persist/integration/react";
import "../app/globals.css"
import Nav from "@/components/navbar";

export default function MyApp({Component, pageProps}){
    return (
        <Provider store={store}>  
        <PersistGate persistor={persistor} loading={null}>
        <main className="font-jjk">
        <Nav></Nav>
        <Component {...pageProps} />
        </main>
        </PersistGate> 
        </Provider>
    )
}