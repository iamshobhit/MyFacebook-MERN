import React, { useState, useContext } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Hyperlink from '../components/common/Hyperlink';
import Label from '../components/common/Label';
import FormInput from '../components/FormInput';
import FormError from './../components/FormError';
import FormSuccess from './../components/FormSuccess';
import { publicFetch } from '../util/fetch'
import { Redirect } from 'react-router';
import {AuthContext} from '../context/AuthContext'
import {Button} from 'react-bootstrap'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required(
    'First name is required'
  ),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Signup = () => {
  const authContext = useContext(AuthContext);
  const [signupSuccess, setSignupSuccess] = useState();
  const [signupError, setSignupError] = useState();
  const [loginLoading, setLoginLoading] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const submitCredentials = async credentials => {
    try {
      setLoginLoading(true);
      const { data } = await publicFetch.post('/api/signup', credentials);
      
      authContext.setAuthState(data);
      //redirect
      setSignupSuccess(data.message);
      setSignupError('');
      setTimeout(() => {
        setRedirectOnLogin(true)
      },700);
      console.log(data);
    } catch (error) {
      setLoginLoading(false);
      const { data } = error.response;
      setSignupError(data.message);
      setSignupSuccess('');
    }
  };

  return (
    <>
      { redirectOnLogin && <Redirect to="/userpage"/>}
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-2 mt-5 ml-auto mr-auto">
            <div className="card p-2">
              <div>
                <div className="w-32 m-auto mb-6 d-flex flex-column">
                <img className="card-img-top w-25 d-flex align-self-center" src="images/avtar-male.png" alt=""/>
                </div>
                <h2 className="mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900">
                  Sign up for an account
                </h2>
                <p className="text-gray-600 text-center">
                  Already have an account?{' '}
                  <Hyperlink to="login" text="Log in now" />
                </p>
              </div>

              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: ''
                }}
                onSubmit={values =>
                  submitCredentials(values)
                }
                validationSchema={SignupSchema}
                >
                {() => (
                  <Form className="mt-8">
                    {signupSuccess && (
                      <FormSuccess text={signupSuccess} />
                    )}
                    {signupError && (
                      <FormError text={signupError} />
                    )}
                    <input
                      type="hidden"
                      name="remember"
                      value="true"
                    />
                    <div>
                      <div className="flex">
                        <div className="mb-2 d-flex justify-content-center flex-column">
                          <div className="mb-1">
                            <Label text="First Name" />
                          </div>
                          <FormInput
                            ariaLabel="First Name"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="mb-2 d-flex justify-content-center flex-column">
                          <div className="mb-1">
                            <Label text="Last Name" />
                          </div>
                          <FormInput
                            ariaLabel="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="mb-2 d-flex justify-content-center flex-column">
                        <div className="mb-1">
                          <Label text="Email address" />
                        </div>
                        <FormInput
                          ariaLabel="Email address"
                          name="email"
                          type="email"
                          placeholder="Email address"
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
                        text="Sign Up"
                        loading={loginLoading}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
