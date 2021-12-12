import React from 'react';

export default function navbar(props) {
    return (
        <div className="row">
            <div className="col-md-6">
                <h1 className="title">Previsao-App</h1>
            </div>

            <div className="col-md-6">
                <form className="region" onSubmit= {(e) => props.changeWeather(e)}>
                    <input className="regioninput"  placeholder="Enter location" onChange={(e)
                    => props.changeRegion(e.target.value)}/>
                    
                </form>
            </div>

        </div>
    )
     
}