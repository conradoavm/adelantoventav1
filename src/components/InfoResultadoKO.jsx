


export const InfoResultadoKO = ( { objDatosResultado } ) => {

    let dollarUSLocale = Intl.NumberFormat('en-US');
    let valor_adelanto_money = dollarUSLocale.format(objDatosResultado.valor_adelanto)
    let seguro_vida_money = dollarUSLocale.format(objDatosResultado.seguro_vida)
    let tafifa_legalizacion_money = dollarUSLocale.format(objDatosResultado.tafifa_legalizacion)
    
    
    return (
        <>
                RESULTADO KO
                { JSON.stringify(objDatosResultado) }
        </>
    )
}
