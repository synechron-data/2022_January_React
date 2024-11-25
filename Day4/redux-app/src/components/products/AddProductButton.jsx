import React from 'react';
import { withRouter } from 'react-router-dom';

const AddProductButton = ({ history }) => {
    return (
        <button className='btn btn-primary' onClick={
            (e) => {
                history.push('/product');
            }
        }>
            Add Product
        </button>
    );
};

export default withRouter(AddProductButton);