import React from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import SignComponent from './users/SignComponent';

const App = () => {
    return (
            <div>
                <BrowserRouter>
                    <Route exact path="/">
                      <Redirect to="/app/login" />
                    </Route>
                    <Route path="*">
                        <Redirect to="/app/login" />
                    </Route>
                    <Route exact path="/app/login" component={SignComponent} />
                </BrowserRouter>
            </div>
        )
}

export default App;
