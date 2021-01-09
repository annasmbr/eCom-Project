import React, { Component } from 'react';
import CartProduct from './cartProduct';

import { connect } from 'react-redux';
import * as actions from '../../actions';

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}/>        
        </div>
    )
}

//function CartContent({className}) {
function CartContent({className, products}) {
        let count = products.length;  
        //let productsJSX = products.map(product => <h1 key={product}>{product}</h1>); 
        //let productsJSX = products.map(product => <CartProduct key={product}/>);
        //let productsJSX = products.map(product => <CartProduct key={product._id}/>);
        let productsJSX = products.map(product => <CartProduct {...product} key={product._id}/>);
        return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
               {productsJSX}
            </div>
           {/*  <div className='cart-content__footer'> */}
           <CartFooter className='cart-content__footer' products={products}/>
        </div>
    )
}

function CartFooter({className, products}) {
    const price = 7.96;
    return (
        <div className={`${className} cart-footer`}>
            <a className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${price}
            </div>
        </div>
    )
}

class ShopCart extends Component {

    componentDidMount() {
        this.props.fetchCartProducts();
    }

    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
                {/* cart.... */}
                <CartButton className='shop-cart__toggle' icon='fas fa-times'/>
                {/* <CartContent className='shop-cart__content'/> */}
                {/* <CartContent className='shop-cart__content' products={[243, 3434, 4554]}/> */}
                {/* <CartContent className='shop-cart__content' products={[243, 3434, 4554, 243, 3434, 4554, 3434, 4554, 243, 3434, 4554]}/> */}
                <CartContent className='shop-cart__content' products={this.props.cartProducts}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
        //state
    }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;