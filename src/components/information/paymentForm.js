import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';
import OrderSummary from './orderSummary';
import { UnderlinedTitle } from './infoHelp';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            //<form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
               // <Field className='sign-up-form__name'
               <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className='payment-form__name'
                type='name'
                //title='Name'
                title='Name on Credit Card'
                placeholder='Name'
                name='name'
                component={FormInput}/>
               {/* <Field className='sign-up-form__email' 
                type='email'
                title='Email'
                placeholder='Email'
                name='email' */}
              <Field className='payment-form__card'
                type='card'
                title='Credit Card Number'
                placeholder='____-____-____-____'
                name='card'
                component={FormInput}/>
                {/* <Field className='sign-up-form__password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password' */}
                <Field className='payment-form__expiration'
                type='expiration'
                title='Expiration Date'
                placeholder='expiration'
                name='expiration'
                component={FormInput}/>
                {/* <Field className='sign-up-form__confirm'
                type='password'
                title='Confirm Password'
                placeholder='Confirm Password'
                name='confirm' */}
               <Field className='payment-form__ccv'
                type='ccv'
                title='CCV'
                placeholder='CCV'
                name='ccv'
                component={FormInput}/>

                {/* <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__login'
                onClick={() => history.push('/account')} */}
                <div className='payment-form__line'></div>
                <Field className='payment-form__pay-complete'
                onClick={() => history.push('/information/payment')}
                type='submit'
                //title='Create Account'
                //name='login'
                title='Pay & Complete'
                name='pay-complete'
                component={FormButton}/>
                {/* <Field className='sign-up-form__back' */}
                <Field className='payment-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>

               <OrderSummary className='payment-form__order-summary'/>
               <div className='payment-form__shipping-info shipping-info'>
                    <UnderlinedTitle className='shipping-info__title' title='Shipping To'/>
                    <div className='shipping-info__name small-text'>Jordan Hudgens</div>
                    <div className='shipping-info__address small-text'>1234 address goes here</div>
                </div>
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm; 