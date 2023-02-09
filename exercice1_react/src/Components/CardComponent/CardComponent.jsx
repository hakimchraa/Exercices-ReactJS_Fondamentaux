import React, { useState } from 'react'
import './CardComponent.css';

export default function CardComponent(props) {
    const {title, image, description} = props

    return (
        <div className='card__container'>
            <h3 className='card__title'> {title} </h3>
            <img className='card__img' src={image} /> 
            <p className='card__description'> {description} </p>

        </div>)
}