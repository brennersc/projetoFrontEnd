import React from 'react';

export default class Info extends React.Component {
    render() {
        return (
                <div className="info">
                    <source media="(max-width: 768px)" srcSet="/img/index-image-mobile.jpg" />
                    <source media="(min-width: 769px)" srcSet="/img/index-image.jpg" />
                    <img src="/img/index-image.jpg" alt="Dev" id="image" />
                    <h1 id="titulo"> ESTÁGIO</h1>
                    <h3 id="sub-titulo"> PROVA DE SELEÇÃO</h3>
                </div>
        );
    }
}