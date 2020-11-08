import React, { useState, useContext } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Hyperlink from './../components/common/Hyperlink';
import Label from './../components/common/Label';
import FormInput from './../components/FormInput';
import FormSuccess from './../components/FormSuccess';
import FormError from './../components/FormError';
import { publicFetch } from '../util/fetch'
import { Redirect } from 'react-router';
import {AuthContext} from '../context/AuthContext'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => {
  const authContext = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState();
  const [loginError, setLoginError] = useState();
  const [loginLoading,setLoginLoading] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const submitCredentials = async credentials => {
    try {
      setLoginLoading(true);
      const { data } = await publicFetch.post('/api/authenticate', credentials);
      //redirect
      setLoginSuccess(data.message);
      setLoginError('');
      setTimeout(() => {
        setRedirectOnLogin(true)
      },200);
      authContext.setAuthState(data);
      console.log(data);
    } catch (error) {
      setLoginLoading(false);
      const { data } = error.response;
      setLoginError(data.message);
      setLoginSuccess(null);
    }
  };

  return (
    <>
    {redirectOnLogin && <Redirect to="/userpage"/>}
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-2 mt-5 ml-auto mr-auto">
            <div className="card p-2">
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full">
                <div>
                  <div className="w-32 m-auto mb-6 d-flex flex-column">
                  <img className="card-img-top w-25 d-flex align-self-center" src="images/avtar-male.png" alt=""/>
                  </div>
                  <h2 className="mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Log in to your account
                  </h2>
                  <p className="text-gray-600 text-center">
                    Don't have an account?{' '}
                    <Hyperlink
                      to="signup"
                      text="Sign up now"
                    />
                  </p>
                </div>

                <Formik
                  initialValues={{
                    email: '',
                    password: ''
                  }}
                  onSubmit={values =>
                    submitCredentials(values)
                  }
                  validationSchema={LoginSchema}
                >
                  {() => (
                    <Form className="mt-2 d-flex flex-column">
                      {loginSuccess && (
                        <FormSuccess text={loginSuccess} />
                      )}
                      {loginError && (
                        <FormError text={loginError} />
                      )}
                      <div>

                        <div className="mb-2 d-flex justify-content-center flex-column">
                          <div className="mb-1">
                            <Label text="Email" />
                          </div>
                          <FormInput
                            ariaLabel="Email"
                            name="email"
                            type="text"
                            placeholder="Email"
                          />
                        </div>

                        <div className="mb-2 d-flex justify-content-center flex-column">
                          <div className="mb-1">
                            <Label text="Password" />
                          </div>
                          <FormInput
                            ariaLabel="Password"
                            name="password"
                            type="password"
                            placeholder="Password"
                          />
                        </div>

                      </div>
                      <div className="mt-6">
                        <Button
                          className="btn btn-outline-black logoStyle bg"
                          type="submit"
                          text="Log In"
                          loading={loginLoading}
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
</>
  );
};

export default Login;
