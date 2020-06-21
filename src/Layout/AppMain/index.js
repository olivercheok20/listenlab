import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import { ToastContainer } from "react-toastify";

const LoggedIn = lazy(() => import("../../Pages/LoggedIn"));
const UserPages = lazy(() => import("../../Pages/User"));

const AppMain = () => {

    return (
        <Fragment>

            {/* Logged In */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale" />
                        </div>
                        <h6 className="mt-3">
                            Page is loading...
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/a" component={LoggedIn} />
            </Suspense>

            {/* User */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale" />
                        </div>
                        <h6 className="mt-3">
                            Page is loading...
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/user" component={UserPages} />
            </Suspense>

            <Route exact path="/" render={() => (
                <Redirect to="/a" />
            )} />

            <ToastContainer />
        </Fragment>
    )
};

export default AppMain;
