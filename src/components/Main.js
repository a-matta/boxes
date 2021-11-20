import React from 'react';
import Boxes from "./Boxes";
import {
    Switch,
    Route,
} from "react-router-dom";

const Home = () => {
    return <h1>This is Home Page</h1>
}

const About = () => {
    return (
        <div>
            <h1>This is About Page</h1>
        </div>
    );
}
const Contacts = () => {
    return (
        <div>
            <h1>This is Contacts Page</h1>
        </div>
    );
}


const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/boxes" component={Boxes}/>
            </Switch>

        </main>
    );
};

export default Main;