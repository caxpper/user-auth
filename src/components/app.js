import React from 'react';
import Nav from './nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import Home from './home';
import AboutUs from './about_us';
import SecretDocs from './secret_docs';
import OperativeList from './operatives_list';
import auth from '../hoc/auth';
import SignUp from './sign_up';
import SignIn from './sign_in';
import Quotes from './quotes';

const App = () => (
    <div>
        <div className="container">
            <Nav />

            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/secret-docs" component={auth(SecretDocs)} />
            <Route path="/operatives-list" component={OperativeList} />   
            <Route path="/movie-quote" component={auth(Quotes)} />         
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
        </div>
    </div>
);

export default App;
