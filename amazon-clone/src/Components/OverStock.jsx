import React from 'react'
import '../Style/OverStock.css';

const OverStock = props => {
    return (
        <div className="overstock__container">
            <h1>{props.title}</h1>
            <div className="overstock__topImages">
                <div className="overstock__watchContainer">
                    <div className="watchImageDiv">
                        <img src={props.watchImage} alt="" />
                    </div>
                    <div className="overstock__watchText">
                    </div>
                </div>
                <div className="overstock__shoesContainer">
                <div className="watchImageDiv">
                        <img src={props.watchImage} alt="" />
                    </div>
                    <div className="overstock__watchText">
                    </div>
                </div>
            </div>
            <div className="overstock__bottomImages">
                <div className="overstock__pcContainer">
                <div className="watchImageDiv">
                        <img src={props.watchImage} alt="" />
                    </div>
                    <div className="overstock__watchText">
                    </div>
                </div>
                <div className="overstock__lawnContainer">
                <div className="watchImageDiv">
                        <img src={props.watchImage} alt="" />
                    </div>
                    <div className="overstock__watchText">
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default OverStock;