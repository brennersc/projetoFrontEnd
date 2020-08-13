import React from 'react';
import Contact from './Main/Contact';
import Form from './Main/Form';
import Info from './Main/Info';

export default class Main extends React.Component {
    render(){
        return(
            <div className="main">
                <Info/>
                <Form/>
                <Contact/>
            </div>
        );
    }
}