import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductFormComponent from '../../components/products/ProductFormComponent';
import productSelectors from '../../selectors/productSelectors';

import * as productActions from '../../actions/productActions';

class ManageProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: { ...this.props.product }
        };
        this.updateState = this.updateState.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }

    updateState(e) {
        const field = e.target.name;
        let product = { ...this.state.product };
        product[field] = e.target.value;
        this.setState({ product: product });
    }

    saveProduct(e) {
        e.preventDefault();

        if (this.state.product.id) {
            this.props.updateProduct(this.state.product);
        } else {
            this.props.insertProduct(this.state.product);
        }

        // this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <ProductFormComponent pageText={this.props.pText} product={this.state.product}
                    onChange={this.updateState} onSave={this.saveProduct} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.params.id;

    let product = {
        id: "",
        name: "",
        description: "",
        status: ""
    };

    if (productId && state.productReducer.products.length > 0) {
        product = productSelectors.getProductById(state, ownProps);
    }

    var pText = product.id === "" ? "Create Product" : "Edit Product";

    return {
        pText, product
    };
}

function mapDispatchToProps(dispatch) {
    return {
        insertProduct: (product) => { dispatch(productActions.insertProduct(product)); },
        updateProduct: (product) => { dispatch(productActions.updateProduct(product)); }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageProductContainer);