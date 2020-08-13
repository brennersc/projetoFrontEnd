import React from 'react';

export default class Logo extends React.Component {
    render(){
        return(
            <div className="logo">
                <picture>
                    <img src="/img/logo.png" alt="Logo" height="60px"/>
                </picture>
            </div>
        );
    }
}