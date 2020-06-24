import React, { Fragment, useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Slider from "react-slick";
import { register } from '../../../actions/auth';

import bg1 from "../../../assets/utils/images/originals/city.jpg";
import bg2 from "../../../assets/utils/images/originals/citydark.jpg";
import bg3 from "../../../assets/utils/images/originals/citynights.jpg";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { booleanTypeAnnotation } from "@babel/types";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    console.log('HELLO');
    e.preventDefault();
    console.log(formData);
    if (password !== password2) {

    } else {
      register({ name, email, password });
    }
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

  if (isAuthenticated) {
    return <Redirect to="/a/me" />
  }

  return (
    <Fragment>
      <div className="h-100">
        <Row className="h-100 no-gutters">
          <Col lg="7" md="12" className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center">
            <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
              <div className="app-logo" />
              <h4>
                <div>Welcome,</div>
                <span>
                  It only takes a{" "}
                  <span className="text-success">few seconds</span> to create
                  your account
                  </span>
              </h4>
              <div>
                <Form onSubmit={e => onSubmit(e)}>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">
                          <span className="text-danger">*</span> Email
                          </Label>
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
                        <Label for="exampleName">
                          <span className="text-danger">*</span> Name
                          </Label>
                        <Input
                          type="text"
                          name="name"
                          id="exampleName"
                          placeholder="Name here..."
                          value={name}
                          onChange={e => onChange(e)}
                          required />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">
                          <span className="text-danger">*</span> Password
                          </Label>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="Password here..."
                          value={password}
                          onChange={e => onChange(e)}
                          minLength='6'
                          required />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePasswordRep">
                          <span className="text-danger">*</span> Repeat
                          Password
                          </Label>
                        <Input
                          type="password"
                          name="password2"
                          id="examplePasswordRep"
                          placeholder="Repeat Password here..."
                          value={password2}
                          onChange={e => onChange(e)}
                          minLength='6'
                          required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className="mt-3" check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                      Accept our{" "}
                      <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                        Terms and Conditions
                        </a>
                      .
                      </Label>
                  </FormGroup>
                  <div className="mt-4 d-flex align-items-center">
                    <h5 className="mb-0">
                      Already have an account?{" "}
                      <a href="#/user/login" className="text-primary">
                        Sign in
                        </a>
                    </h5>
                    <div className="ml-auto">
                      <Button color="primary" className="btn-wide btn-pill btn-shadow btn-hover-shine" size="lg">
                        Create Account
                        </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Col>
          <Col lg="5" className="d-none d-lg-block">
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
        </Row>
      </div>
    </Fragment>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: booleanTypeAnnotation
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register }
)(Register);