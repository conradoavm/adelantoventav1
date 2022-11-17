


export const InfoResultadoOK = ( { objDatosResultado } ) => {

    let dollarUSLocale = Intl.NumberFormat('en-US');
    let valor_adelanto_money = dollarUSLocale.format(objDatosResultado.valor_adelanto)
    let seguro_vida_money = dollarUSLocale.format(objDatosResultado.seguro_vida)
    let tafifa_legalizacion_money = dollarUSLocale.format(objDatosResultado.tafifa_legalizacion)
    
    
    return (
        <>
                <div id="titulo1Resultado">!FELICITACIONES!</div>
                    <div id="titulo2Resultado">Tu adelanto es <strong>$EFECTIVO</strong></div>
                    <div id="datosResultado">
                        <div id="titulo1DatosResultado">Adelanto por valor de</div>
                        <div id="titulo2DatosResultado">COP$ {valor_adelanto_money}</div>
                        <div className="clsFilaDatosResultado">
                            Tasa mensual: {objDatosResultado.tasa_mensual}%
                        </div>
                        <div className="clsFilaDatosResultado">
                            Intereses anticipados: COP$ 
                        </div>
                        <div className="clsFilaDatosResultado">
                            Seguro de vida: COP$ {seguro_vida_money}
                        </div>
                        <div className="clsFilaDatosResultado">
                            Fee legal: COP$ {tafifa_legalizacion_money}
                        </div>
                </div>
        </>
    )
}
