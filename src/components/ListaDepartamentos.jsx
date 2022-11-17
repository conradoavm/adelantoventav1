import data from '../data/ListData.json'
import dataDepartamentos from '../data/departamentos.json'
import { useEffect } from 'react'

export const ListaDepartamentos = ( { inputText , setInputText, setDepartamentoSeleccionado, departamentoRef , setMostrarListaDeptos, formData, setFormData} ) => {

    console.log('setDepartamentoSeleccionado',setDepartamentoSeleccionado)
    //create a new array by filtering the original array

    //let filteredData = []

   // useEffect(() => {
       const filteredData = dataDepartamentos.filter((el) => {

            console.log('inputText',inputText)
            console.log('el.nombre.toLowerCase()',el.nombre.toLowerCase())

            if ( inputText != '' ){
                return el.nombre.toLowerCase().startsWith(inputText)
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
    //},[inputText])

    console.log('filteredData',filteredData)

    const handleClickDepto = ( e ) => {
        console.log( 'DEPTO SELECCIONADO',e.target.dataset.departamento )
        setDepartamentoSeleccionado(e.target.dataset.departamento)
        //departamentoRef.value = e.target.dataset.departamento
        //document.getElementById("departamento").value = e.target.dataset.departamento

        //departamentoRef.current.value = e.target.dataset.departamento
        setInputText(e.target.dataset.departamento)
        //console.log('departamentoRef.current.value',departamentoRef.current.value)

        //document.getElementById("filtroDepartamento").style.display = 'none'
        setMostrarListaDeptos(false)
        setFormData({ ...formData, departamento: e.target.dataset.departamento })
    }

    return (
       <ul id="filtroDepartamento">
            { filteredData.map( (item) => (
                <li key={item.codigo} onClick={ handleClickDepto } data-departamento={item.nombre} >{item.nombre}</li>
            ))}
       </ul>
    )
}