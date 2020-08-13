import React from 'react';
import Input from 'muicss/lib/react/input';

export default class Form extends React.Component {
    render() {
        return (
            <div className="cadastro">
                <div className="formulario">
                    <h1>CADASTRO</h1>
                    <form name="form" id="form" method="post" action="/controllers/controllerForm.php">
                        <Input label="Nome" />
                        <Input label="Email" />
                        <Input label="Nacimento" type="date" />
                        <Input label="Telefone" type="tel" />
                        <center><input type="submit" className="text-center" value="CADASTRAR" /></center>
                    </form>
                </div>
            </div>
        );
    }
}