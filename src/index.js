import { StrictMode } from "react";
import ReactDom from "react-dom";
import "./style.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const element = document.getElementById('root');

ReactDom.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>, element
)
