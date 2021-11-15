import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import Addnewservices from '../../Addnewservices/Addnewservices';
import Allorder from '../../Allorder/Allorder';
import Myorders from '../../Myorders/Myorders';
import Pay from '../../Pay/Pay';
import Reviews from '../../Reviews/Reviews';
import css from './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user} = useAuth();
    return (
        <Router>
        <div className="dashboard-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-title">
                            <h2>Welcome {user.displayName}</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="sidebar-area">
                            <img src="https://web.programming-hero.com/static/media/profileImage.934e5b10.png" alt="" />
                            <h2>{user.displayName}</h2>
                            <div className="sidebar-menu">
                                <Link to={`${url}/myorders`}>My Orders</Link>
                                <Link to={`${url}/pay`}>Pay</Link>
                                <Link to={`${url}/reviews`}>Review</Link>
                                <Link to={`${url}/allorder`}>Manage All Orders</Link>
                                <Link to={`${url}/addnewservices`}>Add a New Service</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="dashboard-right-area">
                            <Switch>
                                <Route exact path={path}>
                                    <Myorders></Myorders>
                                </Route>
                                <Route exact path={`${path}/allorder`}>
                                    <Allorder></Allorder>
                                </Route>
                                <Route path={`${path}/myorders`}>
                                    <Myorders></Myorders>
                                </Route>
                                <Route path={`${path}/reviews`}>
                                    <Reviews></Reviews>
                                </Route>
                                <Route path={`${path}/addnewservices`}>
                                    <Addnewservices></Addnewservices>
                                </Route>
                                <Route path={`${path}/pay`}>
                                    <Pay></Pay>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Router>
    );
};

export default Dashboard;