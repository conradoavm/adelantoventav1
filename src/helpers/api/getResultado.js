
/*
EJEMPLO RESPUESTA
{
    "valor_adelanto": "100000000",
    "tasa_mensual": 1.75,
    "seguro_vida": 1900000,
    "tafifa_legalizacion": 2000000,
    "mensaje": "Prospecto creado satisfactoriamente"
}


*/

export const getResultado = async ( formData, token, setDatosResultado ) => {
    //const objLoggedUser = JSON.parse(localStorage.getItem('objLoggedUser'));
    //const user_token = objLoggedUser["token"]
    let apiUrl;
    var options="";
    

    console.log('getResultado formData',formData)
    //console.log('getResultado user_token',user_token)
    console.log('getResultado token',token)

    var WSHeaders = new Headers();
    WSHeaders.append("Content-Type", "application/json");
    WSHeaders.append("Authorization", "Bearer "+token);
 
    apiUrl = "http://api.avanto.com.co:5000/api/v1/registro-prospecto";
  
    
    var data_cli = JSON.stringify(formData)
    

    console.log('data_cli',data_cli)
  
    options = {
      method: 'POST',
      headers: WSHeaders,
      body: data_cli,
      redirect: 'follow'
    };
    
    console.log('options',options)
      const response = await fetch(apiUrl, options);
      console.log('response getResultado',response)
      const result = await response.json();
      console.log('result getResultado',result)
      setDatosResultado(result)
      
      return result
    
  
  
  };
  