import React, { Fragment, lazy } from "react";
import { Route } from "react-router-dom";

const CreateRoom = lazy(() => import("./CreateRoom"));
const JoinRoom = lazy(() => import("./JoinRoom"));

const Rooms = ({ match }) => (
  <Fragment>
    <Route path="/a/rooms/create" component={CreateRoom} />
    <Route path="/a/rooms/join" component={JoinRoom} />
  </Fragment>
);

export default Rooms;
