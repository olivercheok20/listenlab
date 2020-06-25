import React, { Fragment, useEffect } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { getCurrentProfile } from '../../../actions/profile';

import PageTitle from "../../../Layout/AppMain/PageTitle";
import UsageInfo from './Components/UsageInfo';

const Profile = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <Fragment>
      <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
        transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
        <PageTitle heading={profile.profile ? profile.profile.user.name : "Profile"}
          icon="pe-7s-user icon-gradient bg-mean-fruit" />
        <UsageInfo
          numberOfRoomsCreated={profile.profile ? profile.profile.numberOfRoomsCreated : 0}
          numberOfRoomsJoined={profile.profile ? profile.profile.numberOfRoomsJoined : 0}
          numberOfSongsPlayed={profile.profile ? profile.profile.numberOfSongsPlayed : 0} />
      </CSSTransitionGroup>
    </Fragment>
  )

}

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
