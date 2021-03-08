import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
//situs ini memiliki 3 halaman, yang semuanya dirender secara dinamis di browser,
//meskipun hlaman tidak pernah direfresh, perhatikan bagaimana React Router
// membuat URL selalu terbaharui saat anda menavigasi situs.
// ini menjaga riwayat Browser, memastikan hal hal seperti tombol kembali
// dan bookmark berfungsi dengan baik
function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
//anda dapat menganggat konten ini sebagai "Halaman (Konten) di situs anda"
function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

export default BasicExample;