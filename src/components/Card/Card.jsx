import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ card: { title, text }, children }) => (
    <div className="card" style={{width: '18rem'}}>
        { children }
        <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ text }</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);

Card.propTypes = {
    props: PropTypes.shape({
        card: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    })
};

export default Card;

