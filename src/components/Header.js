import React from 'react';
import Nav from './Header/Nav';
import Botton from './Header/Botton';
import Address from './Header/Address';
import Logo from './Header/Logo';

export default class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <Nav/>
                <Botton/>
                <Logo/>
                <Address/>
            </div>
        );
    }
}