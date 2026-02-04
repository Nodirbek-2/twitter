import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AuthContext from "./context/authContext.jsx";
import App from "./app/index.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AuthContext>
                <App />
            </AuthContext>
        </BrowserRouter>
    </StrictMode>,
);
