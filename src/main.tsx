import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter as Router} from 'react-router-dom'
// import {worker} from "./mocks/worker.tsx";

// import {worker} from "./mocks/worker.tsx";

// worker.start({ serviceWorker: { url: '/public/mockServiceWorker.js' } })


// worker.start({serviceWorker: {url: '/public/mockServiceWorker.js'}})
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
)
