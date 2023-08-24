import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import { CustomContextWrapper } from "./utils/context"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={ store }>
                <CustomContextWrapper>
                    <App />
                </CustomContextWrapper>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);


