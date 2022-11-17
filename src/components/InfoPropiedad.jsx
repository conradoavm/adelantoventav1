
import { ListaDepartamentos } from "./ListaDepartamentos"
import { useState, useRef } from "react";
import { ListaMunicipios } from "./ListaMunicipios";

export const InfoPropiedad = ( { paso, setPaso, formData, setFormData} ) => {

    const [ inputText, setInputText] = useState("");
    const [ inputTextMunicipio, setInputTextMunicipio] = useState("");
    const [ departamentoSeleccionado, setDepartamentoSeleccionado ] = useState("");
    const [ stepErrors, setStepErrors ] = useState({
        departamento: "",
        ciudad: "",
        direccion: "",
        nombre_proyecto: "",
        area: "",
        banos: "",
        habitaciones: "",
        parqueaderos: ""
    })
    const [ mostrarListaDeptos, setMostrarListaDeptos] = useState(true);
    const [ mostrarListaMunicipios, setMostrarListaMunicipios] = useState(true);

    const departamentoRef = useRef();
    const areaRef = useRef();

    console.log('render InfoPropiedad formData ',formData)
    
    const filtrarDeparamentos = ( e ) => {
        console.log('DEPARTAMENTO',e.target.value)
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        setFormData({ ...formData, departamento: e.target.value })
        setMostrarListaDeptos(true)
    }
  
    const filtrarCiudades = ( e ) => {
        console.log('CIUDAD',e.target.value)
        let lowerCase = e.target.value.toLowerCase();
        setInputTextMunicipio(e.target.value)
        setFormData({ ...formData, ciudad: e.target.value })
        setMostrarListaMunicipios(true)
    }

    const handleSiguientePaso2 = () => {

        let hayErrores = false

        let objErrores = { 
            departamento: "",
            ciudad: "",
            direccion: "",
            nombre_proyecto: "",
            area: "",
            banos: "",
            habitaciones: "",
            parqueaderos: ""
        }

        if ( document.getElementById("departamento").value == '' ){
            objErrores.departamento = 'Ingresa el departamento'
            hayErrores = true
        }

        if ( document.getElementById("ciudad").value == '' ){
            objErrores.ciudad = 'Ingresa la ciudad'
            hayErrores = true
        }

        if ( document.getElementById("direccion").value == '' ){
            objErrores.direccion = 'Ingresa la dirección'
            hayErrores = true
        }
    
        if ( document.getElementById("nombre_proyecto").value == '' ){
            objErrores.nombre_proyecto = 'Ingresa el nombre del proyecto'
            hayErrores = true
        }

        if ( document.getElementById("area").value == '' ){
            objErrores.area = 'Área'
            hayErrores = true
        }

        if ( document.getElementById("banos").value == '' ){
            objErrores.banos = 'Número baños'
            hayErrores = true
        }

        if ( document.getElementById("habitaciones").value == '' ){
            objErrores.habitaciones = 'Número habitaciones'
            hayErrores = true
        }

        if ( document.getElementById("parqueaderos").value == '' ){
            objErrores.parqueaderos = 'Número parqueaderos'
            hayErrores = true
        }

        setStepErrors(objErrores)

        if ( !hayErrores ){
            setPaso(paso + 1)
        }

    }
    
    return (
        <>
            <section id="infoPropiedad" className="clsStepContainer">
                <div className="clsTituloPaso">
                    <div className="clsTitulo1Paso">Queremos saber un poco</div>
                    <div className="clsTitulo2Paso">de tu propiedad</div>
                </div>
                <div className="clsFormPaso">
                    <div className="clsFilaForm">
                        <div className="clsInputGroup2">
                             <input type="text" ref={departamentoRef} onChange={ filtrarDeparamentos } value={ inputText} id="departamento" name="departamento" className="clsInputText" placeholder="Departamento" />
                             <span className="clsMsgError">{stepErrors.departamento}</span>
                             { ( inputText != '' && mostrarListaDeptos ) ?
                                <ListaDepartamentos inputText={inputText} setInputText={setInputText} setDepartamentoSeleccionado={setDepartamentoSeleccionado} departamentoRef={departamentoRef} setMostrarListaDeptos={setMostrarListaDeptos} formData={formData} setFormData={setFormData} />
                                : null
                             }
                        </div>
                      
                        <div className="clsInputGroup2">
                            <input type="text" onChange={ filtrarCiudades } value={inputTextMunicipio} id="ciudad" name="ciudad" className="clsInputText" placeholder="Ciudad" />
                            <span className="clsMsgError">{stepErrors.ciudad}</span>
                            { ( inputTextMunicipio != ''  && mostrarListaMunicipios ) ?
                            <ListaMunicipios inputTextMunicipio={inputTextMunicipio} departamentoSeleccionado={departamentoSeleccionado} setInputTextMunicipio={setInputTextMunicipio} setMostrarListaMunicipios={setMostrarListaMunicipios} formData={formData} setFormData={setFormData} />
                            : null
                            }
                        </div>
                        
                    </div>
                    <div className="clsFilaForm">
                        <div className="clsInputGroup1">
                            <input type="text" id="direccion" name="direccion"  onChange={ (e) => setFormData({ ...formData, direccion: e.target.value }) } className="clsInputText" placeholder="Dirección completa" />
                            <span className="clsMsgError">{stepErrors.direccion}</span>
                        </div>
                    </div>

                    <div className="clsFilaForm">
                        <div className="clsInputGroup1">
                            <input type="text" id="nombre_proyecto" name="nombre_proyecto" onChange={ (e) => setFormData({ ...formData, nombre_proyecto: e.target.value }) }  className="clsInputText" placeholder="Nombre del proyecto" />
                            <span className="clsMsgError">{stepErrors.nombre_proyecto}</span>
                        </div>
                    </div>

                    <div className="clsFilaForm">

                        <div className="clsInputGroup3">
                            <input type="number" id="area" name="area" ref={areaRef}  onChange={ (e) => setFormData({ ...formData, area: e.target.value }) }   className="clsInputText" placeholder="Área m2" />
                            <span className="clsMsgError">{stepErrors.area}</span>
                        </div>

                        <div className="clsInputGroup3">
                            <input type="number" id="banos" name="banos" onChange={ (e) => setFormData({ ...formData, banos: e.target.value }) }  className="clsInputText" placeholder="Nº Baños" />
                            <span className="clsMsgError">{stepErrors.banos}</span>
                        </div>
                        
                        <div className="clsInputGroup3">
                            <input type="number" id="habitaciones" name="habitaciones" onChange={ (e) => setFormData({ ...formData, habitaciones: e.target.value }) } className="clsInputText" placeholder="Nº Habitaciones" />
                            <span className="clsMsgError">{stepErrors.habitaciones}</span>
                        </div>

                        <div className="clsInputGroup3">
                            <input type="number" id="parqueaderos" name="parqueaderos" onChange={ (e) => setFormData({ ...formData, parqueaderos: e.target.value }) } className="clsInputText" placeholder="Nº Parqueaderos" />
                            <span className="clsMsgError">{stepErrors.parqueaderos}</span>
                        </div>

                    </div>
                    <div className="clsFilaForm">
                        <button type="button" className="clsBoton" onClick={handleSiguientePaso2} >Siguiente</button>
                    </div>
                    
                </div>
            </section>
        </>
    )
}