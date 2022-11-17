import { useContext, useRef, useState } from "react"
import { AuthContext } from "../auth/context"
import { getResultado }  from '../helpers/api/getResultado'

let objAutentica = {}

const getToken = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Accept', '*/*');
    myHeaders.append('Connection', 'keep-alive');
    
    let userLogin = 'usr1'
    let userPassword = 'usuario1'
    let apiUrl;
    var options="";
    var data ={"usuario":userLogin, "password":userPassword}
    const WSHeader = new Headers();
    WSHeader.append('Content-Type', 'application/json');
    apiUrl = "https://wxh2pko01h.execute-api.us-east-1.amazonaws.com/avanto_login";

    options = {
        method: 'POST',
        body: JSON.stringify(data),
        WSHeader,
        redirect: 'follow'
    };
     
    const response = await fetch(apiUrl, options)
    console.log('response',response)
    var data = await response.json();
    console.log('data',data)

    return data
            
}


export const InfoFinanzas = ( { paso, setPaso, formData, setFormData, setMostrarResultado, objDatosResultado, setDatosResultado } ) => {

    const { objAuthState, onLoginAuth } = useContext( AuthContext )
    const [ stepErrors, setStepErrors ] = useState({
        vlr_aprox_vivienda: "",
        vlr_hipoteca: "",
        vlr_adelanto_deseado: ""
    })
    const vlr_aprox_viviendaRef = useRef(null);
    const vlr_hipotecaRef = useRef(null);
    const vlr_adelanto_deseadoRef = useRef(null);

    let objDatosSubmit = {
        "nombre":"",
        "correo":"",
        "celular":"",
        "ciudad":"",
        "direccion":"",
        "proyecto":"",
        "area_total":"",
        "numero_banos":"",
        "numero_habitacioes":"",
        "numero_parqueaderos":"",
        "valor_avaluo":"",
        "valor_saldo_hipoteca":"",
        "valor_adelanto_solicitado":""
    }

    console.log('render Infofinanzas formData ',formData)

    const  handleOnchange =  (e) => {
        let nombre_campo =  e.target.name
        
        console.log('nombre_campo',nombre_campo,'e.target.name',e.target.name,'e.target.value',e.target.value)

        if ( e.target.name == 'vlr_aprox_vivienda' ){
            
            setFormData({ ...formData, vlr_aprox_vivienda: vlr_aprox_viviendaRef.current.value.replace(/\./g, "") })
        }else if( e.target.name == 'vlr_hipoteca' ){
            setFormData({ ...formData, vlr_hipoteca: vlr_hipotecaRef.current.value.replace(/\./g, "") })

        }else if( e.target.name == 'vlr_adelanto_deseado' ) {
            setFormData({ ...formData, vlr_adelanto_deseado: vlr_adelanto_deseadoRef.current.value.replace(/\./g, "") })
        }
       

        e.target.value = e.target.value.toString();
        console.log('e.target.value toString',e.target.value);
        var money = e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        console.log('money',money);
        
        e.target.value = money;

    }

    const  handleSubmit =  (e) => {

        e.preventDefault()

        console.log('InfoFinanzas handleSubmit formData',formData)

        let hayErrores = false

        let objErrores = { 
            vlr_aprox_vivienda: "",
            vlr_hipoteca: "",
            vlr_adelanto_deseado: ""
        }

        let vlr_aprox_vivienda = document.getElementById("vlr_aprox_vivienda").value 
        vlr_aprox_vivienda = vlr_aprox_vivienda.replace(/\./g, "")
        if ( vlr_aprox_vivienda == '' || parseInt(vlr_aprox_vivienda) < 10000000 ){
            objErrores.vlr_aprox_vivienda = 'El valor debe ser mayor a 10 millones'
            hayErrores = true
        }
        
        /*
        let vlr_hipoteca = document.getElementById("vlr_hipoteca").value 
        vlr_hipoteca = vlr_hipoteca.replace(/\./g, "")
        if ( vlr_hipoteca == '' || parseInt(vlr_hipoteca) < 10000000 ){
            objErrores.vlr_hipoteca = 'El valor de la hipoteca'
            hayErrores = true
        }
        */

        let vlr_adelanto_deseado = document.getElementById("vlr_adelanto_deseado").value 
        vlr_adelanto_deseado = vlr_adelanto_deseado.replace(/\./g, "")
        if ( vlr_adelanto_deseado == '' || parseInt(vlr_adelanto_deseado) < 1000000 ){
            objErrores.vlr_adelanto_deseado = 'El valor del adelanto debe ser mayor a 1 millón'
            hayErrores = true
        }

        setStepErrors(objErrores)

        if ( !hayErrores ){
                console.log('SUBMIT formData',formData)

                objDatosSubmit.nombre = formData.nombre_completo
                objDatosSubmit.correo = formData.correo
                objDatosSubmit.celular = formData.celular
                objDatosSubmit.ciudad = formData.ciudad
                objDatosSubmit.direccion = formData.direccion
                objDatosSubmit.proyecto = formData.nombre_proyecto
                objDatosSubmit.area_total = formData.area
                objDatosSubmit.numero_banos = formData.banos
                objDatosSubmit.numero_habitacioes = formData.habitaciones
                objDatosSubmit.numero_parqueaderos = formData.parqueaderos
                objDatosSubmit.valor_avaluo = formData.vlr_aprox_vivienda
                objDatosSubmit.valor_saldo_hipoteca = formData.vlr_hipoteca
                objDatosSubmit.valor_adelanto_solicitado = formData.vlr_adelanto_deseado

                let objUser =  getToken()

                let TOKEN = ''
                objUser.then(data => {
                    console.log('data autentica',data)
                    console.log('data token',data.token)
                    TOKEN = data.token

                      //const resp_cliente =  getResultado(formData.get('inmobiliaria'), formData.get('searchText') );
                    const resp_cliente = getResultado(objDatosSubmit, TOKEN, setDatosResultado);

                    //if ( resp_cliente.mensaje == 'Prospecto creado satisfactoriamente'
                    console.log('resp_cliente',resp_cliente)
                    console.log('resp_cliente objDatosResultado',objDatosResultado)
                    console.log('resp_cliente objDatosResultado mensaje',objDatosResultado.mensaje)

                    //if ( objDatosResultado.mensaje == 'Prospecto creado satisfactoriamente'){
                        setMostrarResultado(true)
                   // }else{
                     //   console.error('HA OCURRIDO UN ERROR AL CONECTARSE A LA API')
                    //}

                   // const objRes = resp_cliente.then(resultado =>   console.log('respresultado data ',resultado.data));
                   // console.log('objRes',objRes)
                    

                });
                console.log('TOKEN',TOKEN)

              
                
               // setMostrarResultado(true)

                /*
                resp_cliente.then( (data ) => {

                    //console.log('data',data)
                    if ( data.mensaje && data.mensaje == 'Error autenticando el cliente del servicio, verifique el token' ){
                        onLogoutAuth()

                        navigate('/', { 
                            replace: true
                        } )

                    }else{

                        if ( data ){
                            if ( data.propietario_existe ){
                                setCliente(data)

                                let new_arr_contratos = data.array_contratos.map(obj => (

                                    { ...obj, 
                                        tasa: 2, 
                                        fecha_inicio: obj.fecha_inicio.substring(0, 4)+'-'+obj.fecha_inicio.substring(4, 6)+'-'+obj.fecha_inicio.substring(6, 8),
                                        fecha_fin: obj.fecha_fin.substring(0, 4)+'-'+obj.fecha_fin.substring(4, 6)+'-'+obj.fecha_fin.substring(6, 8)    
                                    }
                                ))
                                setContratos(new_arr_contratos)

                                setShowPlanPagos(false)

                                setObjClientesError({ isError: false, mensaje: '' })
                                setMsgCliente('');
                            }else{
                                
                                    setObjClientesError({ isError: true, mensaje: data.message })
                                    setMsgCliente('No se encuentra el cliente para la inmobiliaria seleccionada');
                            }
                        
                        }else{
                            setObjClientesError({ isError: true, mensaje: 'Ha ocurrido un error al traer los datos del cliente' })
                            setMsgCliente('Ha ocurrido un error al traer los datos del cliente');
                        }

                    }
                    setLoadingData(false)
                    

                });
                */

                //alert('submit')
        }
    }

    
    return (
        <>

                    <section id="infoFinanzas" className="clsStepContainer">
                        <div className="clsTituloPaso">
                            <div className="clsTitulo1Paso">Hablemos de las</div>
                            <div className="clsTitulo2Paso">Finanzas</div>
                        </div>
                        <div className="clsFormPaso">
                            <div className="clsFilaForm">
                                <label htmlFor="vlr_aprox_vivienda">¿Cual es el valor aproximado de tu vivienda?</label>
                                <input type="text" ref={vlr_aprox_viviendaRef} id="vlr_aprox_vivienda" name="vlr_aprox_vivienda" onChange={ handleOnchange } className="clsInputText" placeholder="COP" />
                                <span className="clsMsgError">{stepErrors.vlr_aprox_vivienda}</span>
                            </div>
                            <div className="clsFilaForm">
                                <label htmlFor="vlr_hipoteca">¿Capital adeudado en hipoteca?</label>
                                <input type="text" ref={vlr_hipotecaRef} id="vlr_hipoteca" name="vlr_hipoteca" onChange={ handleOnchange } className="clsInputText" placeholder="COP" />
                                <span className="clsMsgError">{stepErrors.vlr_hipoteca}</span>
                            </div>
                            <div className="clsFilaForm">
                                <label htmlFor="vlr_adelanto_deseado">¿Cuanto quieres adelantar?</label>
                                <input type="text" ref={vlr_adelanto_deseadoRef} id="vlr_adelanto_deseado" name="vlr_adelanto_deseado"  onChange={ handleOnchange } className="clsInputText" placeholder="COP" />
                                <span className="clsMsgError">{stepErrors.vlr_adelanto_deseado}</span>
                            </div>
                            <div className="clsFilaForm">
                                <button type="submit" className="clsBoton" onClick={handleSubmit} >CALCULAR ADELANTO</button>
                            </div>
                        </div>
                    </section>
        </>
    )
}