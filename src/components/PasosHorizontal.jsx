
export const PasosHorizontal = ( { paso } ) => {


    return (
        <>
            <div id="stepsSectorHorizontal">

                    <div id="listaPasosHorizontal">
                        <div className="clsStepHorizontal">
                            <div className={`clsCirculo ${ ( paso == 0 )?"clsCirculoPasoActivo":"clsCirculoPasoInactivo" }`}>1</div>
                            <div className="clsSectorRayaYLabelHorizontal">
                                <div className="clsEspacioRayaHorizontal"></div>
                                <div className="clsLabelHorizontal">Datos<br/>Personales</div>
                            </div>
                        </div>
                        
                        <div className="clsStepHorizontal">
                            <div className={`clsCirculo ${ ( paso == 1 )?"clsCirculoPasoActivo":"clsCirculoPasoInactivo" }`}>2</div>
                            <div className="clsSectorRayaYLabelHorizontal">
                                <div className="clsEspacioRayaHorizontal"></div>
                                <div className="clsLabelHorizontal">Datos<br/>Inmueble</div>
                            </div>
                        </div>

                        <div className="clsStepHorizontal">
                            <div className={`clsCirculo ${ ( paso == 2 )?"clsCirculoPasoActivo":"clsCirculoPasoInactivo" }`}>3</div>
                            <div className="clsSectorRayaYLabelHorizontal">
                                <div className="clsEspacioRayaHorizontal"></div>
                                <div className="clsLabelHorizontal">Datos<br/>Adelantos</div>
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}