import React from 'react';

import classes from './PizzaImage.module.css';
import PizzaImageUrl from '../../assets/pizza.jpg';

const PizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImageUrl} className={classes.PizzaImg} />
    </div>
);

export default PizzaImage;
