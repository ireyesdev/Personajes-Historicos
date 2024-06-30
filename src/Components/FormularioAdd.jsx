import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/FormularioAdd.css';


function FormularioAdd({ db }){
  const [nombre, setNombre] = useState(``);
  const [nacimiento, setNacimiento] = useState(``);
  const [fallecimiento, setFallecimiento] = useState(``);
  const [descripcion, setDescripcion] = useState(``);
  const [errores, setErrores] = useState({});

  const navigate = useNavigate();
  
  async function guardar(){
    try{
      let personajes = {
        name: nombre,
        birthDate: nacimiento,
        deathDate: fallecimiento,
        description: descripcion
      }
        let res = await axios.post(db, personajes);
        let data = await res.data;

        if(data.status === 1){
          alert(data.message)
        }
    }
    catch(error){
      alert('Error al guardar los datos')
      console.log(error)
    }
  }
  
  function enviar(e) {
    e.preventDefault();
    if (validarFormulario()) {
        guardar();
        alert('Se agrego Exitosamente')
        navigate("/personajes")
    }
}

function validarFormulario() {
  const nuevosErrores = {};
  if (!nombre) nuevosErrores.nombre = 'Escribe el nombre completo'
  if (!nacimiento) nuevosErrores.nacimiento = 'Debes escribir la fecha de nacimiento';
  if (!fallecimiento) nuevosErrores.fallecimiento = 'Debes escribir la fecha de fallecimiento';
  if (!descripcion) nuevosErrores.descripcion = 'Debes escribir una pequeña descripción';

  setErrores(nuevosErrores);
  return Object.keys(nuevosErrores).length === 0;
}

  return (
    
    <div className='form-wrapper'>
      <div className='form-container'>
        <form className='needs-validation' noValidate onSubmit={enviar}>
          <h2 className='titulo-form'>Agregar nuevo Personaje</h2>
            <div className='form-group'>
                <label>Nombre:</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} required />
                {errores.nombre && <p className="error">{errores.nombre}</p>}
            </div>

            <div className='form-group'>
                <label>Nacimiento:</label>
                <input type="date" className=""onChange={(e) => setNacimiento(e.target.value)} value={nacimiento} required />
                {errores.nacimiento && <p className="error">{errores.nacimiento}</p>}
            </div>

            <div className='form-group'>
                <label>Fallecimiento:</label>
                <input type="date" className="" onChange={(e) => setFallecimiento(e.target.value)} value={fallecimiento} />
            </div>

            <div className='form-group'>
                <label>Descripción:</label>
                <textarea className="" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} required />
                {errores.descripcion && <p className="error">{errores.descripcion}</p>}
            </div>

            <div className='form-group button-group'>
                <button type="submit"  className='btn pi pi-check' icon="pi pi-check"> Guardar</button>
                <button type="button" className='btn pi pi-times' onClick={() => navigate("/personajes")} icon="pi pi-times"> Cancelar</button>
            </div>
        </form>
    </div>
  </div>
  )
}
export default FormularioAdd;