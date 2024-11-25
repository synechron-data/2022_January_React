import * as actionTypes from './actionTypes';

import productAPIClient from '../services/product-api-client';
import history from '../utilities/history';

function loadProductsRequested(msg) {
    return {
        type: actionTypes.LOAD_PRODUCTS_REQUESTED,
        payload: { message: msg, flag: false }
    };
}

function loadProductsSuccess(products, msg) {
    return {
        type: actionTypes.LOAD_PRODUCTS_SUCCESS,
        payload: { data: products, message: msg, flag: true }
    };
}

function loadProductsFailed(msg) {
    return {
        type: actionTypes.LOAD_PRODUCTS_FAILED,
        payload: { message: msg, flag: true }
    };
}

export function loadProducts() {
    return function (dispatch) {
        dispatch(loadProductsRequested("Products Request Started..."));

        productAPIClient.getAllProducts().then(products => {
            setTimeout(() => {
                dispatch(loadProductsSuccess(products, "Products Request Completed..."));
            }, 5000);
        }).catch(eMsg => {
            dispatch(loadProductsFailed(eMsg));
        });
    };
}

// ----------------------------------------------------------- INSERT

function insertProductSuccess(product, msg) {
    return {
        type: actionTypes.INSERT_PRODUCT_SUCCESS,
        payload: { data: product, message: msg, flag: true }
    };
}

export function insertProduct(product) {
    return function (dispatch) {
        productAPIClient.insertProduct(product).then(insertedProduct => {
            dispatch(insertProductSuccess(insertedProduct, "Product Inserted Successfully..."));
            history.push('/products');
        }).catch(eMsg => {
            console.error(eMsg);
        });
    }
}

// ----------------------------------------------------------- UPDATE

function updateProductSuccess(product, msg) {
    return {
        type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: { data: product, message: msg, flag: true }
    };
}

export function updateProduct(product) {
    return function (dispatch) {
        productAPIClient.updateProduct(product).then(updatedProduct => {
            dispatch(updateProductSuccess(updatedProduct, "Product Updated Successfully..."));
            history.push('/products');
        }).catch(eMsg => {
            console.error(eMsg);
        });
    }
}

// ----------------------------------------------------------- DELETE

function deleteProductSuccess(product, msg) {
    return {
        type: actionTypes.DELETE_PRODUCT_SUCCESS,
        payload: { data: product, message: msg, flag: true }
    };
}

export function deleteProduct(product) {
    return function (dispatch) {
        productAPIClient.deleteProduct(product).then(_ => {
            dispatch(deleteProductSuccess(product, "Product Deleted Successfully..."));
        }).catch(eMsg => {
            console.error(eMsg);
        });
    }
}