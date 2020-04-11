import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Nav />

                    <Route exact path="/saved" component={Saved} />
                    <Route path="/search" component={Search} />
                    
                </div>
            </Router>
        );
    }
}

export default App;