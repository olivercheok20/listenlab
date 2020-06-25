import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../Layout/AppMain/PageTitle";

const JoinRoom = ({ match }) => (
    <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
            transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
            <PageTitle heading="Join Room"
                icon="pe-7s-headphones icon-gradient bg-mean-fruit" />
        </CSSTransitionGroup>
    </Fragment>
);

export default JoinRoom;
