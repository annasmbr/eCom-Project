import React, { Component } from 'react';

import SignInForm from './signinForm';
//import { reduxForm, Field } from 'redux-form';

class SignIn extends Component {
    render() {
        return (
            <div className='sign-in'>
                <SignInForm className='sign-in__form' />
            </div>
        )
    }
}

//SignIn = reduxForm({
 //   form: 'SignIn'
//})(SignIn);

export default SignIn;

//sign innn