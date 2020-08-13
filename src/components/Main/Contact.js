import React from 'react';
import Table from 'react-bootstrap/Table'

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <center><h1>LISTA DE CADASTRO</h1></center>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>NOME</th>
                                <th>E-MAIL</th>
                                <th>NASCIMENTO</th>
                                <th>TELEFONE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}