import './App.css';
import React from 'react';
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <nav className="w-full">
                    <div className="container flex items-center justify-between mx-auto font-medium max-w-6xl">
                        <ul className="list-reset flex py-4">
                            <li className="px-2 pl-6 flex flex-row items-center"><h1 className="text-lg"><Link to="/">Irene de Koning</Link></h1>
                            </li>
                        </ul>
                        <ul className="list-reset flex py-2 pr-2 lg:pr-8">
                            <li className="mr-6 text-sm md:text-lg hover:underline cursor-pointer">
                                <Link to="/aboutme">Wie ben ik</Link>
                            </li>
                            <li className="mr-6 text-sm md:text-lg hover:underline cursor-pointer">
                                <Link to="/projects">Projecten</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Header/>

                <Switch>
                    <Route path="/aboutme">
                        <Aboutme/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/">
                        <Aboutme/>  
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
