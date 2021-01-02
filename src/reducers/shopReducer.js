import {
    // SET_SHOP_CATEGORIES
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    //selectedCategoryId: 0,
    //productsSelected: [],
    products: [],
    filteredProducts: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SHOP_CATEGORIES:
            const categories  = action.payload;
            return {
                ...state,
                categories
            }
        // case SET_SHOP_CATEGORIES:
        //     return {
        //         ...state,
        //         categories: action.payload
        //     }
        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_WITH_CATEGORY_ID:
            //console.log(action.payload);
            var filteredProducts = [];
            state.products.map(product => {
                if(product.belongsTo.includes(action.payload)) {
                    filteredProducts.push(product);
                }
            })
             return {
                ...state,
                // selectedCategoryId
                filteredProducts
            }    
         case FILTER_PRODUCTS_WITH_QUERY: 
            var filteredProducts = [];            
            state.products.map(product => {
                if(product.title.toLowerCase().includes(action.payload.query.toLowerCase())) {
                   filteredProducts.push(product)
                }
            })
            //console.log(action.payload);
            //console.log(action.payload.query);
            return {
                ...state,
                filteredProducts
            }            
        default: return state;
    }
} 