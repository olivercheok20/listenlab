import React, { Fragment } from "react";

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  DropdownToggle,
  DropdownMenu,
  Nav,
  Button,
  NavItem,
  NavLink,
  UncontrolledButtonDropdown,
} from "reactstrap";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import city3 from "../../../assets/utils/images/dropdown-header/city3.jpg";
import avatar1 from "../../../assets/utils/images/avatars/1.jpg";

class UserBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <Fragment>
        <div className="header-btn-lg pr-0">
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left">
                <UncontrolledButtonDropdown>
                  <DropdownToggle color="link" className="p-0">
                    <img width={42} className="rounded-circle" src={avatar1} alt="" />
                    <FontAwesomeIcon
                      className="ml-2 opacity-8"
                      icon={faAngleDown}
                    />
                  </DropdownToggle>
                  <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-info">
                        <div className="menu-header-image opacity-2"
                          style={{
                            backgroundImage: "url(" + city3 + ")",
                          }} />
                        <div className="menu-header-content text-left">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <img width={42} className="rounded-circle" src={avatar1} alt="" />
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Alina Mcloughlin
                                </div>
                                <div className="widget-subheading opacity-8">
                                  A short profile description
                                </div>
                              </div>
                              <div className="widget-content-right mr-2">
                                <Button className="btn-pill btn-shadow btn-shine" color="focus">
                                  Logout
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="scroll-area-xs"
                      style={{
                        height: "110px",
                      }}>
                      <PerfectScrollbar>
                        <Nav vertical>
                          <NavItem className="nav-item-header">
                            My Account
                          </NavItem>
                          <NavItem>
                            <NavLink href="#/a/me">
                              Profile
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#/a/settings">
                              Settings
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </PerfectScrollbar>
                    </div>
                    <Nav vertical>
                      <NavItem className="nav-item-divider" />
                      <NavItem className="nav-item-btn text-center">
                        <Button size="sm" className="btn-wide" color="primary" href="#/a/rooms/create">
                          Create a Room
                        </Button>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
              <div className="widget-content-left  ml-3 header-user-info">
                <div className="widget-heading">Alina Mclourd</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserBox;
