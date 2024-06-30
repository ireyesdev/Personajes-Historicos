import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import 'primeicons/primeicons.css';
import '../styles/Tabla.css'

function Tabla({ cols, filteredData, controlador }) {
    return (
        <div className="data-table-component">
            <div className="table-container">
                <table className='table'>
                    <thead>
                        <tr>
                            {cols.map((col, index) => (
                                <th key={index}>{col}</th>
                            ))}
                            <th id="centered-button" colSpan="2">
                                <Link title='Agregar Personaje' className="button-link" id="add" to={`/${controlador}/add`}> Agregar</Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                {Object.values(item).map((value, index2) => (
                                    <td key={index2}>{value}</td>
                                ))}
                                <td>
                                    <Link title='Editar' className='button-link-edit pi pi-user-edit' to={`/${controlador}/edit/${Object.values(item)[0]}`}></Link>
                                </td>
                                <td>
                                    <Link title='Eliminar' className='button-link-delete pi pi-user-minus' to={`/${controlador}/delete/${Object.values(item)[0]}`}></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tabla;





