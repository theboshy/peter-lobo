import React from 'react';
import './cardComponent.scss';
import './script';

 const CardComponent = (props: any) => {
    return <>

        {/*<!--<nav className="menu">
            <ul className="menu__list">
                <li className="menu__item  js-modify  active" data-target=".card" data-effect="zoom">Zoom out</li>
                <li className="menu__item  js-modify" data-target=".card" data-effect="blur">Blur</li>
                <li className="menu__item  js-modify" data-target=".card" data-effect="color">Colors</li>
            </ul>
        </nav>-->*/}

        <div className="card" data-effect="zoom">
            <button className="card__save  js-save" type="button">
                <i className="fa  fa-bookmark"></i>
            </button>
            <figure  className="card__image">
                <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description"/>
            </figure>
            <div className="card__header">
                <figure className="card__profile">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Neil_Armstrong.jpg" alt="Short description"/>
                </figure>
            </div>
            <div className="card__body">
                <h3 className="card__name">Neil Armstrong</h3>
                <p className="card__job">astronaut & engineer</p>
                <p className="card__bio"> American astronaut, engineer, and the first person to walk on the Moon.</p>
            </div>
            <div className="card__footer">
                <p className="card__date">Feb 10 2018</p>
                <p className=""></p>
            </div>
        </div>

    </>
}

export default CardComponent;
