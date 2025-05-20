import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App, Order } from "./pages";

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/order" element={<Order />} />
            </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)