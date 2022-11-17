import { useState, useContext, useEffect, useCallback } from "react"
import { InfoContacto, InfoPropiedad, InfoFinanzas, InfoResultado, PasosVertical, PasosHorizontal } from "./"
import { AuthContext } from "../auth/context"

export const Layout = ( { children, title = 'Sin título' }) => {

    const { objAuthState, onLoginAuth } = useContext( AuthContext )
    const [ objDatosForm, setDatosForm ] = useState({});
    const [ paso, setPaso ] = useState(0);
    const [ mostrarResultado, setMostrarResultado ] = useState(false)
    const [ objDatosResultado, setDatosResultado ] = useState({
 

    });
    const [ ancho, setAncho ] = useState(window.innerWidth)

    const [formData, setFormData] = useState({
        nombre_completo: "",
        correo: "",
        celular: "",
        departamento: "",
        ciudad: "",
        direccion: "",
        nombre_proyecto: "",
        area: "",
        banos: "", 
        habitaciones: "",
        parqueaderos: "",
        vlr_aprox_vivienda: "",
        vlr_hipoteca: "",
        vlr_adelanto_deseado: "",
    });

    const [ stepErrors, setStepErrors ] = useState({
        nombre_completo: "",
        correo: "",
        celular: ""
    })
    
    const componentList = [
        <InfoContacto paso={paso} setPaso={setPaso}  formData={formData}  setFormData={setFormData} stepErrors={stepErrors} setStepErrors={setStepErrors} />,
        <InfoPropiedad paso={paso} setPaso={setPaso} formData={formData}  setFormData={setFormData} />,
        <InfoFinanzas paso={paso} setPaso={setPaso} formData={formData}  setFormData={setFormData} setMostrarResultado={setMostrarResultado} objDatosResultado={objDatosResultado} setDatosResultado={setDatosResultado} />,
    ];

    console.log('ancho',ancho)

    return(
        <>

            <form id="formSteps">
             
                    <div id="sectorPasosHorizontal">
                        { ( ancho <= 768 )? 
                            <PasosHorizontal paso={paso} />:null
                        }
                    </div>
                    <div id="sectorPC"> 
                        <div id="leftSector"  className={  mostrarResultado ? 'izquierdoFull':'' }>
                            
                            {  ( !mostrarResultado )?componentList[paso]:null }

                            { /* 
                            <InfoContacto />
                            <InfoPropiedad />
                            <InfoFinanzas />
                            <InfoResultado />
                            */}

                            {   ( mostrarResultado )?
                                 <InfoResultado paso={paso} setPaso={setPaso} formData={formData}  setFormData={setFormData} objDatosResultado={objDatosResultado} />:null
                            }
                        </div>
                        <div id="rightSector" className={  mostrarResultado ? 'derechoOculto':'' } >
                            { ( !mostrarResultado )?
                            <PasosVertical paso={paso}/>:null
                            }
                        </div>
                    </div>
              
            </form>
        </>



    )
}