
export const PasosVertical = (  { paso } ) => {

    return (
        <>
            <div id="stepsSector">

                    <div id="listaPasosVertical">
                        <div className="clsStep">
                            <div className="clsStepCirculoYLabel">
                                <div className={`clsCirculo ${ ( paso == 0 )?"clsCirculoPasoActivo":"clsCirculoPasoInactivo" }`}>1</div>
                                <div className="clsLabelCirculo">Datos<br/>Personales</div>
                            </div>
                            <div className="clsEspacioRaya">
                                <div className="clsCajaRaya">&nbsp;</div>
                            </div>
                        </div>
                        <div className="clsStep step-active">
                            <div className="clsStepCirculoYLabel">
                                <div className={`clsCirculo ${ ( paso == 1 )?"clsCirculoPasoActivo":"clsCirculoPasoInactivo" }`}>2</div>
                                <div className="clsLabelCirculo">Datos<br/>Inmueble</div>
                            </div>
                            <div className="clsEspacioRaya">
                                <div className="clsCajaRaya"></div>
                            </div>
                        </div>
                        <div className="clsStep">
                            <div className="clsStepCirculoYLabel">
                                <div className={`clsCirculo ${ ( paso == 2 )?"clsCirculoPasoActivo":"clsCirculoPasoInactivo" }`}>3</div>
                                <div className="clsLabelCirculo">Datos<br/>Adelantos</div>
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}