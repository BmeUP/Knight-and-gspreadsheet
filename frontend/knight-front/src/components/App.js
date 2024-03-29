import React from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import SignComponent from './users/SignComponent';
import MainPage from './mainPage/MainPageComponent';
import Header from './basicComponents/headerComponent';
import SideBar from './basicComponents/sideBarComponent';
import '../styles.css';

class  App extends React.Component{

    st = () => {
        if(window.location.href.includes('app/login')){
            return {
                    display: 'flex',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                };
        }else{
            return {
                display: 'flex',
                width: '100%',
                height: '100%'
            }
        }

    }

    render(){
        return (
            <div className="main-page">
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
}

export default App;
