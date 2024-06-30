import React, { useState, useEffect } from 'react';
import Tabla from './Tabla';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../styles/Personajes.css';

function Personajes({ db }) {
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('name');

    useEffect(() => {
        const cargarPersonajes = async () => {
            setCargando(true); 
            try {
                let res = await axios.get(db);
                let data = await res.data;

                setTimeout(() => {
                    setPersonajes(data);
                    setCargando(false);
                }, 2000);
            } catch (error) {
                alert(error);
                console.log(error);
                setCargando(false);
            }
        };
        cargarPersonajes();
    }, [db]);

    useEffect(() => {
        setCurrentPage(0);
    }, [searchTerm]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const filteredPersonajes = personajes.filter(item => {
        if (searchType === 'name') {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchType === 'id') {
            return item.id.toString().includes(searchTerm);
        }
        return true;
    });

    const offset = currentPage * itemsPerPage;
    const currentItems = filteredPersonajes.slice(offset, offset + itemsPerPage);

    return (
        <div className="main-search">
            <h1>Personajes Históricos</h1>
            <div className="search-input">
                <input type="text" className="search-box" placeholder="Buscar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="search-buttons">
                <button onClick={() => setSearchType('name')} className={searchType === 'name' ? 'active' : ''}>Buscar por Nombre</button>
                <button onClick={() => setSearchType('id')} className={searchType === 'id' ? 'active' : ''}>Buscar por ID</button>
            </div>

            {cargando ? (
                <div className="spinner"></div>
            ) : (
                <>
                    <Tabla 
                        controlador={"personajes"} 
                        filteredData={currentItems} 
                        cols={["ID", "Nombre", "Nacimiento", "Fallecimiento", "Descripción"]} 
                    />
                    <ReactPaginate
                        previousLabel={'Anterior'}
                        nextLabel={'Siguiente'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(filteredPersonajes.length / itemsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                    />
                </>
            )}
        </div>
    );
}
export default Personajes;
