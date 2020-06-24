import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../Layout/AppMain/PageTitle";

const Settings = ({ match }) => (
  <Fragment>
    <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
      transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
      <PageTitle heading="Settings"
        icon="pe-7s-car icon-gradient bg-mean-fruit" />
    </CSSTransitionGroup>
  </Fragment>
);

export default Settings;
