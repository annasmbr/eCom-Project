import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopSearchBar from './shopSearchBar';
import ShopProduct from './shopProduct';
import ShopCart from './shopCart';

class Shop extends Component {

    constructor() {
        super()

        this.state = {
            showCart: true
        }
    }

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);

        // fetch shop products action creator
        this.props.fetchShopCategories();

        //this.props.fetchShopCategories(() => {
          //  this.props.setNavbarLinks(this.props.categories);
        //});

         // filter products with links
         this.props.fetchShopProducts();
        }
        // fetch navbar links
            // set navbar links
            // filter products with links
        
    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true
    }

    onSubmit = (fields) => {
        //console.log(fields);
        this.props.filterProductsWithQuery(fields)
    }
 
    render() {
        //return <ShopCart className='shop__cart'/>

        return (
            <div className='shop'>
                {/*shop ....*/}
                {/* shop search bar */}
                <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar'/>
                {/* shop product */}
                <div className='shop__products'>
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                               // <div key={product._id} className='shop-product'>
                                //    <div className='shop-product__title'>
                                //        {product.title}
                                //    </div>
                                //    <div className='shop-product__description'>
                                //        {product.description}
                                //    </div>
                                // </div> 
                            <ShopProduct {...product} key={product._id} />
                            )
                        })
                    }
                </div>
                {
                    this.state.showCart ? <ShopCart className='shop__cart' /> : ''
                }
                {/* shop cart button */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    //return { state } 
    //const { categories } = state.shop;
    const { categories, filteredProducts } = state.shop;
    return {
        categories,
        filteredProducts
    } 
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop; 