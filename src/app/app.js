import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Editor from '../editor/editor'

const Home = () => {
    return <div className='home'>
        hello world
    </div>
}

export default function App() {
    return (
        <Router>
        <div>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/editor">Editor</Link>
            </li>
            </ul>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/editor">
                    <Editor />
                </Route>
            </Switch>
        </div>
        </Router>
    );
}