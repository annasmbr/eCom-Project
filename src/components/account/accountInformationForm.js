import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

//import { FormInput, FormButton } from '../formFields';
import { FormInput, FormButton, LongGrayButton } from '../formFields';

import history from '../../history';

class AccountInformationForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field className='account-information-form__name'
                type='name'
                title='Name'
                placeholder='Name'
                name='name'
                component={FormInput}/>

                <Field className='account-information-form__email'
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}/>
                
               <Field className='account-information-form__street-address'
                type='address'
                title='Street Address'
                placeholder='Street Address'
                name='address'
                component={FormInput}/>

                <Field className='account-information-form__city'
                type='city'
                title='City'
                placeholder='City'
                name='city'
                component={FormInput}/>


                <Field className='account-information-form__state'
                type='state'
                title='State'
                placeholder='State'
                name='state'
                component={FormInput}/>

                {/*<div className='sign-in-form__line'></div>
                <Field className='sign-in-form__login'*/}

                <Field className='account-information-form__zipcode'
                type='zipcode'
                title='Zipcode'
                placeholder='Zipcode'
                name='zipcode'
                component={FormInput}/>

                {/* <Field className='account-information-form__login'
                onClick={() => history.push('/account')}
                type='submit'
                title='Login'
                name='login'
                component={FormButton}/>*/}

               <Field className='account-information-form__change-password'
                onClick={() => console.log('tryna show passwords')}
                type='button'
                labelTitle='Password'
                title='Change Password'
                name='change-password'
                component={LongGrayButton}/>

            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm; 

//<form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                //<Field className='sign-in-form__email'

//<Field className='sign-in-form__password'
                //type='password'
               // title='Password'
                //placeholder='Password'
               // name='password'