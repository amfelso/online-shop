import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const googleSignIn = () => dispatch(googleSignInStart());
  const emailSignIn = (email, password) => dispatch(emailSignInStart({ email, password }));
  
  const [userCredentials, setCredentials ] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignIn(email, password);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignIn}
            isGoogleSignIn
          >
            Google Sign In
          </CustomButton>
        </div>
      </form>
     </div>
  );
}

export default SignIn;
