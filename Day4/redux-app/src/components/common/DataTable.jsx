import React from 'react';
import PropTypes from 'prop-types';

const Ths = ({ item }) => {
    var allHeads = Object.keys(item).concat(["", "Actions", ""]);

    var ths = allHeads.map((item, index) => {
        return <th key={index}>{item.toUpperCase()}</th>;
    });

    return (
        <tr>
            {ths}
        </tr>
    );
}

const Trs = ({ item, onSelect, onDelete }) => {
    var allValues = Object.values(item).concat([
        <a href='/#' className='text-primary' onClick={
            (e) => {
                e.preventDefault();
                if (onSelect)
                    onSelect(item, false);
            }
        }>Details</a>,
        <a href='/#' className='text-warning' onClick={
            (e) => {
                e.preventDefault();
                if (onSelect)
                    onSelect(item, true);
            }
        }>Edit</a>,
        <a href='/#' className='text-danger' onClick={
            (e) => {
                e.preventDefault();
                if (onDelete) {
                    if (window.confirm('Are you sure, you want to delete the record?')) {
                        onDelete(item.id, e);
                    }
                }
            }
        }>Delete</a>
    ]);

    var tds = allValues.map((item, index) => {
        return <td key={index}>{item}</td>;
    });

    return (
        <tr>
            {tds}
        </tr>
    );
}

const DataTable = ({ items, children, onSelect, onDelete }) => {
    if (items && items.length) {
        var [item] = items;
        var ths = <Ths item={item} />;
        var trs = items.map((item, index) => {
            return <Trs key={index} item={item} onSelect={onSelect} onDelete={onDelete} />;
        });
    }
    return (
        <div>
            {children ? children : null}
            <table className="table table-hover">
                <thead>
                    {ths}
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </div>
    );
}

DataTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DataTable;
