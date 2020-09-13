import React from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import SignComponent from './users/SignComponent';
import Rand from './users/randComponent';
import '../styles.css'

const App = () => {
    return (
            <div className="main-page">
                <BrowserRouter>
                    <Route exact path="/">
                      <Redirect to="/app/login" />
                    </Route>
                    {/* <Route path="*">
                        <Redirect to="/app/login" />
                    </Route> */}
                    <Route exact path="/app/login" component={SignComponent} />
                    <Route exact path="/app/huy" component={Rand} />
                </BrowserRouter>
            </div>
        )
}

export default App;
