import React, { Component, Fragment } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import MetisMenu from "react-metismenu";
import { setEnableMobileMenu } from "../../reducers/ThemeOptions";
import { MainNav } from "./NavItems";
import { logout } from '../../actions/auth';

const Nav = ({ logout, location, enableMobileMenu, setEnableMobileMenu }) => {
  const toggleMobileSidebar = () => {
    if (setEnableMobileMenu) {
      setEnableMobileMenu(!enableMobileMenu);
    }
  };

  if (isPathActive('/a/logout')) {
    console.log('logout');
    logout();
  }

  function isPathActive(path) {
    return location.pathname.startsWith(path);
  }

  return (
    <Fragment>
      <h5 className="app-sidebar__heading">Menu</h5>
      <MetisMenu content={MainNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
});

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  logout: logout
});
export default connect(mapStateToProps, { logout })(withRouter(Nav));
