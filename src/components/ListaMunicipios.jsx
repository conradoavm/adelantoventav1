import data from '../data/ListData.json'
import dataMunicipios from '../data/municipios.json'
import { useEffect } from 'react'

export const ListaMunicipios = ( { inputTextMunicipio, departamentoSeleccionado, setInputTextMunicipio, setMostrarListaMunicipios, formData, setFormData } ) => {

    //console.log('dataMunicipios',dataMunicipios)
    //console.log('departamentoSeleccionado',departamentoSeleccionado)
    console.log('inputTextMunicipio',inputTextMunicipio)

    //create a new array by filtering the original array

    //let filteredData = []

    //useEffect(() => {

      let departamento_tmp = '';
      let municipio_tmp = '';
      const filteredData = dataMunicipios.filter((el) => {

           
           // console.log('el.municipio.toLowerCase()',el.municipio.toLowerCase())

            if ( inputTextMunicipio != '' ){

                departamento_tmp = el.departamento.toLowerCase()
                console.log('departamentoSeleccionado',departamentoSeleccionado.toLowerCase(),'el.departamento',departamento_tmp,'el.municipio.toLowerCase()',el.municipio.toLowerCase())

                if ( departamento_tmp == departamentoSeleccionado.toLowerCase() && el.municipio.toLowerCase().startsWith(inputTextMunicipio.toLowerCase())){
                    console.log('filtro ok municipio', el.municipio.toLowerCase())
                    return true
                }else{
                    return false
                }
                
            }else{
                return false
            }

            /*
            //if no input the return the original
            if (props.input === '') {
                return el;
            }
            //return the item which contains the user input
            else {
                return el.text.toLowerCase().includes(props.input)
            }
            */
        })
   // },[inputTextMunicipio])

    console.log('filteredData',filteredData)

    const handleClickMunicipio = ( e ) => {
        console.log( 'handleClickMunicipio', e.target.dataset.municipio )
        //document.getElementById("ciudad").value = e.target.dataset.municipio

        setInputTextMunicipio(e.target.dataset.municipio)
       

        setFormData({ ...formData, ciudad: e.target.dataset.municipio })

        setMostrarListaMunicipios(false)

    }

    return (
       <ul id="filtroMunicipio">
            { filteredData.map( (item) => (
                <li key={item.codigo} onClick={ handleClickMunicipio } data-departamento={departamentoSeleccionado} data-municipio={item.municipio} >{item.municipio}</li>
            ))}
       </ul>
    )
}