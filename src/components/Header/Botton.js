import React from 'react';

export default class Botton extends React.Component {

    constructor() {
        super();
        this.state = {
            visNav: 'flex'
        }
    }

    clickMe() {
        if (this.state.visNav === 'flex') {
            this.setState({
                visNav: 'none'
            });
        } else {
            this.setState({
                visNav: 'flex'
            });
        }
        document.querySelector('.nav').style.display = this.state.visNav;
    }


    render() {
        return (
            <div className="buttonMob" onClick={this.clickMe.bind(this)}>
                <img src="/img/hamburguer.svg" alt="Botão Mobile" height="20px" width="20px"/>
            </div>
        );
    }
}