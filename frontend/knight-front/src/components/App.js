import React from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import SignComponent from './users/SignComponent';
import MainPage from './mainPage/MainPageComponent';
import Header from './basicComponents/headerComponent'
import '../styles.css'

const App = () => {
    return (
            <div className="main-page">
                <Header />
                <BrowserRouter>
                    <Route exact path="/">
                      <Redirect to="/app/login" />
                    </Route>
                    <Route exact path="/app/login" component={SignComponent} />
                    <Route exact path="/app/tables" component={MainPage} />
                </BrowserRouter>
            </div>
        )
}

export default App;
