import React, { Fragment, useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

import Slider from "react-slick";

import bg1 from "../../../assets/utils/images/originals/city.jpg";
import bg2 from "../../../assets/utils/images/originals/citydark.jpg";
import bg3 from "../../../assets/utils/images/originals/citynights.jpg";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  }

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/a/me" />
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 0,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <Fragment>
      <div className="h-100">
        <Row className="h-100 no-gutters">
          <Col lg="4" className="d-none d-lg-block">
            <div className="slider-light">
              <Slider {...settings}>
                <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                  <div className="slide-img-bg"
                    style={{
                      backgroundImage: "url(" + bg1 + ")",
                    }} />
                  <div className="slider-content">
                    <h3>Listen With Friends</h3>
                    <p>
                      With Listen Lab, you can listen to Spotify in real-time
                      with your friends. Just create a room and send others
                      the invite link to let them join in the fun!
                      </p>
                  </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                  <div className="slide-img-bg"
                    style={{
                      backgroundImage: "url(" + bg3 + ")",
                    }} />
                  <div className="slider-content">
                    <h3>Vote For Songs</h3>
                    <p>
                      With Listen Lab, the community decides what plays next.
                      Simply submit song requests and vote for your favorite
                      songs. After every song, the next highest-voted song
                      begins!
                      </p>
                  </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                  <div className="slide-img-bg opacity-6"
                    style={{
                      backgroundImage: "url(" + bg2 + ")",
                    }} />
                  <div className="slider-content">
                    <h3>Create Playlists</h3>
                    <p>
                      Had a great Listen Lab session with friends and want
                      to save the tracklist? No problem! At any time in your
                      room you can export the track history to a Spotify
                      playlist!
                      </p>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
          <Col lg="8" md="12" className="h-100 d-flex bg-white justify-content-center align-items-center">
            <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
              <div className="app-logo" />
              <h4 className="mb-0">
                <div>Welcome back,</div>
                <span>Please sign in to your account.</span>
              </h4>
              <h6 className="mt-3">
                No account?{" "}
                <a href="#/user/register" className="text-primary">
                  Sign up now
                  </a>
              </h6>
              <Row className="divider" />
              <div>
                <Form onSubmit={e => onSubmit(e)}>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="Email here..."
                          value={email}
                          onChange={e => onChange(e)}
                          required />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="Password here..."
                          value={password}
                          onChange={e => onChange(e)}
                          required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                      Keep me logged in
                      </Label>
                  </FormGroup>
                  <Row className="divider" />
                  <div className="d-flex align-items-center">
                    <div className="ml-auto">
                      <a href="#/user/forgot-password" className="btn-lg btn btn-link" >
                        Recover Password
                        </a>{" "}
                      <Button color="primary" size="lg">
                        Login
                        </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);