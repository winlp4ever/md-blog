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

// import 3rd party cpns
import Button from '@material-ui/core/Button'

import './_app.scss'
import GridIcon from '../../imgs/grid.svg'
import HomeIcon from '../../imgs/home.svg'

const Home = () => {
    return <div className='home'>
        hello world
    </div>
}

const Menu = () => {
    return <div className='menu'>
        <Button>
            <Link to="/">
                <HomeIcon />
                <span>Home</span>
            </Link>
        </Button>
        <Button>
            <Link to="/editor">
                <GridIcon />
                <span>Editor</span>
            </Link>
        </Button>
    </div>        
}

export default function App() {
    return (
        <Router>
        <div className='app'>
            <Menu />
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