import { InfoResultadoOK } from "./InfoResultadoOK";
import { InfoResultadoKO } from "./InfoResultadoKO";

export const InfoResultado = ( { paso, setPaso, formData, setFormData, objDatosResultado} ) => {

    console.log('InfoResultado objDatosResultado ',objDatosResultado)

    let dollarUSLocale = Intl.NumberFormat('en-US');
    let valor_adelanto_money = dollarUSLocale.format(objDatosResultado.valor_adelanto)
    let seguro_vida_money = dollarUSLocale.format(objDatosResultado.seguro_vida)
    let tafifa_legalizacion_money = dollarUSLocale.format(objDatosResultado.tafifa_legalizacion)
    
    const handleClikAdelantarVenta = (e) => {
        e.preventDefault()
        console.log('clic handleClikAdelantarVenta')
    }

    return (
        <>
            <section id="infoResultado" className="clsStepContainer">
                <div id="infoResultadoLeft">
                    <img src="img/fotoPaso4.png" />
                </div>
                <div id="infoResultadoRight">
                    { ( objDatosResultado.mensaje == 'Prospecto creado satisfactoriamente')?
                        <InfoResultadoOK objDatosResultado={objDatosResultado} /> :null 
                    }

                    { ( objDatosResultado.mensaje != 'Prospecto creado satisfactoriamente')?
                        <InfoResultadoKO objDatosResultado={objDatosResultado} /> :null 
                    }
                    <button type="button" className="clsBoton" onClick={handleClikAdelantarVenta}>ADELANTAR VENTA</button>
                </div>
            </section>
        </>
    )
}