import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/index";
import { Provider } from "react-redux";
import store from "./store/store";

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)