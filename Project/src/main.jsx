import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>
)
