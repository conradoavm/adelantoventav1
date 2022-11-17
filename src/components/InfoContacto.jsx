import { useState } from "react"

export const InfoContacto = ( { paso, setPaso, formData, setFormData, stepErrors, setStepErrors} ) => {

    console.log('InfoContacto','formData',formData)

    const handleSiguientePaso1 = () => {

        let hayErrores = false
        let objErrores = { 
                nombre_completo: "",
                correo: "",
                celular: ""
            }

        if ( document.getElementById("nombre_completo").value == '' ){
            //setStepErrors( (stepErrors) => {
              //  return stepErrors
            //})
          //  setStepErrors({ ...stepErrors, nombre_completo: 'Ingresa el nombre completo' })
            objErrores.nombre_completo = 'Ingresa el nombre completo'
            hayErrores = true
            console.log('objErrores nombre',objErrores)
        }

        if ( document.getElementById("correo").value == '' ){
           // setStepErrors({ ...stepErrors, correo: 'Ingresa tu correo electrónico' })
            objErrores.correo = 'Ingresa tu correo electrónico'
            hayErrores = true
            console.log('objErrores correo',objErrores)
        }

        
        if ( document.getElementById("celular").value == '' ){
            //setStepErrors({ ...stepErrors, celular: 'Ingresa tu número de celular' })
            objErrores.celular = 'Ingresa tu número de celular'
            hayErrores = true
        }
    

        setStepErrors(objErrores)

        if ( !hayErrores ){
            setPaso(paso + 1)
        }

    }

    return (
        <>
            <section id="infoContacto" className="clsStepContainer">
                <div id="infoConractoLeft">
                    <img id="img_paso1" src="../img/fotoPaso1.png" />
                </div>
                <div id="infoConractoRight">
                    <div className="clsTituloPaso">
                        <div className="clsTitulo1Paso">Comencemos con tu</div>
                        <div className="clsTitulo2Paso">ADELANTO DE VENTA</div>
                    </div>
                    <div id="subTituloPaso1">
                        Queremos saber un poco<br/> de ti para comenzar
                    </div>
                    <div className="clsFormPaso" id="sectorFormPaso1">
                        <div className="clsFilaPaso1">
                            <input type="text" id="nombre_completo" name="nombre_completo" onChange={ (e) => setFormData({ ...formData, nombre_completo: e.target.value }) } className="clsInputText" placeholder="Nombre completo" />
                            <span className="clsMsgError">{stepErrors.nombre_completo}</span>
                        </div>

                        <div className="clsFilaPaso1">
                            <input type="email" id="correo" name="correo" onChange={ (e) => setFormData({ ...formData, correo: e.target.value }) } className="clsInputText"  placeholder="Correo electrónico"/>
                            <span className="clsMsgError">{stepErrors.correo}</span>
                        </div>

                        <div className="clsFilaPaso1">
                            <input type="text" id="celular" name="celular" onChange={ (e) => setFormData({ ...formData, celular: e.target.value }) } className="clsInputText"  placeholder="Número de celular"/>
                            <span className="clsMsgError">{stepErrors.celular}</span>
                        </div>

                        <button type="button" className="clsBoton" onClick={ handleSiguientePaso1 } >Siguiente</button>
                    </div>
                </div>
            </section>
        </>
    )
}