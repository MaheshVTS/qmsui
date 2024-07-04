import React, { Component }  from "react";
import "./login.css"


import AuthService from "services/auth.service";

import withRouter from "common/with-router";
import { Formik, Field,Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';






const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends React.Component {

  validationSchema() {
    return Yup.object().shape({
      username: Yup.string()
        .required('Username is required')
        .min(5, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
      password: Yup.string()
        .required('Password is required')
        .min(3, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    });
  }
  constructor(props) {
    super(props);
    
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  // handleSubmit(data) {
  //   console.log(JSON.stringify(data, null, 2));
  // }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    console.log("callin on submit >>>>>>>>>>>>>>>>")
    //e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    //this.form.validateAll();

   // if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(e.username, e.password).then(
        () => {
          this.props.router.navigate("/dashboard");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    //} else {
     // this.setState({
      //  loading: false
      //});
   // }
  }

  render() {
    const initialValues = {
      username: '',
      password: ''
    };

    return (




      <div className="container-fluid loginContainer p-4 background-radial-gradient overflow-hidden">
      <div className="area">
        <ul className="circles">


        <nav className="login-navbar-customized" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
           <a className="navbar-brand" style={{ color: 'white', fontSize: '25px', display: 'flex', alignItems: 'center' }} href="#">
           <img className="background-img" src="../assets/images/qualityManagementIcon.png" alt="" style={{ marginRight: '10px' }} />
           QMS (Quality Management System)
           </a>
         </nav>
      
           
              
       <div className="container-fluid">
        <div className="row">
        <div className="col-md-4 Empty"></div>

        <div className="col-md-4 loginMod">

        <div className='card loginCard my-6 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                  
         
        <div className='card-body p-5 d-flex flex-column align-items-center mx-auto w-100 loginDesign'>

            <span className="login100-form-title"></span>
            <h2 className="fw-bold mb-2 text-center block" style={{ color: '#4B49AC' }}>Log In</h2>
            <p className="mb-5 text-secondary" style={{ fontFamily: "Lato, sans-serif", fontSize: "15px" }}>Please enter your username and password!</p>
                     
       <Formik
          initialValues={initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleLogin}
        >
          {({ errors, touched, resetForm, handleChange }) => (



            <Form  className="loginForm">
              <div className="form-group">
                <Field
                
                  name="username"
                  type="text"
                  onChange={handleChange}
                  className={
                    'form-control' +
                    (errors.username && touched.username ? ' is-invalid' : '')
                  }
                  placeholder="Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <Field
                  name="password"
                  type="password"
                  onChange={handleChange}
                  className={
                    'form-control' +
                    (errors.password && touched.password ? ' is-invalid' : '')
                  }
                  placeholder="Password" 
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
               
                <div className="d-flex justify-content-center">
  <p className="small mb-3 pb-lg-2">
    <a style={{ color: '#98BDFF', fontWeight: 'bold', fontSize: '14px' }} href="#!">Forgot password?</a>
  </p>
</div>
              <div className="form-group">
              <button
                className="login-button-customized"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            </Form>
          )}
        </Formik>
        {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}            <br/>
                              <div className="credentials-info-container" style={{marginTop: "-35px",marginBottom: "-6px"}}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="info-container text-md-left">
                          <p className="text-secondary" style={{fontFamily: "Lato, sans-serif", fontSize: "15px"}}> Do not share credentials with anyone</p>
                        </div>
                      </div>
                    </div>
                   </div>
                          




                   </div>
                      </div>
              
            </div>


            <div className="col-md-4 Empty"></div>
            <br></br>
        </div>
      
      </div>  
             
                
     
   
      <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                      </ul>
              </div >
        </div>
      
     
             

    );
  }
}


export default withRouter(Login);