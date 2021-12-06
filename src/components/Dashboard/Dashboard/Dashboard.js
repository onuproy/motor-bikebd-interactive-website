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
import AllProducts from '../../AllProducts/Allproducts';
import Myorders from '../../Myorders/Myorders';
import Pay from '../../Pay/Pay';
import Reviews from '../../Reviews/Reviews';
import Makeadmin from '../Makeadmin/Makeadmin';
import css from './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user} = useAuth();
    const {admin} = useAuth();
    return (
        <Router>
        <div className="dashboard-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-title">
                            <h2>Welcome to <strong>{user.displayName}</strong></h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="sidebar-area">
                            <img src="https://web.programming-hero.com/static/media/profileImage.934e5b10.png" alt="" />
                            <h2>{user.displayName}</h2>
                            <div className="sidebar-menu">
                                {
                                    !admin && <div>
                                    <Link to={`${url}/myorders`}>My Orders</Link>
                                    <Link to={`${url}/pay`}>Pay</Link>
                                    <Link to={`${url}/reviews`}>Review</Link></div>
                                }
                                {
                                    admin && <div>
                                    <Link to={`${url}/makeadmin`}>Make Admin</Link>
                                    <Link to={`${url}/allorder`}>Manage All Orders</Link>
                                    <Link to={`${url}/allproducts`}>Manage Products</Link>
                                    <Link to={`${url}/addnewservices`}>Add a New Product</Link></div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="dashboard-right-area">
                            <Switch>
                                {
                                !admin &&
                                <Route exact path={path}>
                                    <Myorders></Myorders>
                                </Route>
                                }
                                {
                                admin &&
                                <Route exact path={path}>
                                    <Allorder></Allorder>
                                </Route>
                                }
                                <Route exact path={`${path}/allorder`}>
                                    <Allorder></Allorder>
                                </Route>
                                <Route exact path={`${path}/myorders`}>
                                    <Myorders></Myorders>
                                </Route>
                                <Route exact path={`${path}/reviews`}>
                                    <Reviews></Reviews>
                                </Route>
                                <Route exact path={`${path}/addnewservices`}>
                                    <Addnewservices></Addnewservices>
                                </Route>
                                <Route exact path={`${path}/pay`}>
                                    <Pay></Pay>
                                </Route>
                                <Route exact path={`${path}/makeadmin`}>
                                    <Makeadmin></Makeadmin>
                                </Route>
                                <Route exact path={`${path}/allproducts`}>
                                    <AllProducts></AllProducts>
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