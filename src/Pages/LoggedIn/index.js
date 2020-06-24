import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";
import ThemeOptions from "../../Layout/ThemeOptions";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";

const Contact = lazy(() => import("./Contact"));
const Members = lazy(() => import("./Members"));
const Profile = lazy(() => import("./Profile"));
const Rooms = lazy(() => import("./Rooms"));
const Settings = lazy(() => import("./Settings"));

const LoggedIn = () => {
    return (
        <Fragment>
            <ThemeOptions />
            <AppHeader />
            <div className="app-main">
                <AppSidebar />
                <div className="app-main__outer">
                    <div className="app-main__inner">

                        {/* Contact */}

                        <Suspense fallback={
                            <div className="loader-container">
                                <div className="loader-container-inner">
                                    <div className="text-center">
                                        <Loader type="ball-pulse-rise" />
                                    </div>
                                    <h6 className="mt-5">
                                        Page is loading...
                                    </h6>
                                </div>
                            </div>
                        }>
                            <Route path="/a/contact" component={Contact} />
                        </Suspense>

                        {/* Members */}

                        <Suspense fallback={
                            <div className="loader-container">
                                <div className="loader-container-inner">
                                    <div className="text-center">
                                        <Loader type="ball-pulse-rise" />
                                    </div>
                                    <h6 className="mt-5">
                                        Page is loading...
                                    </h6>
                                </div>
                            </div>
                        }>
                            <Route path="/a/members" component={Members} />
                        </Suspense>

                        {/* Profile */}

                        <Suspense fallback={
                            <div className="loader-container">
                                <div className="loader-container-inner">
                                    <div className="text-center">
                                        <Loader type="ball-rotate" />
                                    </div>
                                    <h6 className="mt-3">
                                        Page is loading...
                                    </h6>
                                </div>
                            </div>
                        }>
                            <Route path="/a/me" component={Profile} />
                        </Suspense>

                        {/* Rooms */}

                        <Suspense fallback={
                            <div className="loader-container">
                                <div className="loader-container-inner">
                                    <div className="text-center">
                                        <Loader type="ball-pulse-rise" />
                                    </div>
                                    <h6 className="mt-5">
                                        Page is loading...
                                    </h6>
                                </div>
                            </div>
                        }>
                            <Route path="/a/rooms" component={Rooms} />
                        </Suspense>

                        {/* Settings */}

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
                            <Route path="/a/settings" component={Settings} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default LoggedIn;