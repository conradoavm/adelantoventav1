export const getDatosCliente = async ( idInmobiliaria, documento ) => {
  const objLoggedUser = JSON.parse(localStorage.getItem('objLoggedUser'));
  const user_token = objLoggedUser["token"]
  let apiUrl;
  var options="";
  
  var WSHeaders = new Headers();
  WSHeaders.append("Content-Type", "application/json");
  
  apiUrl = "http://api.avanto.com.co:5000/api/v1/cliente";

  var data_cli = JSON.stringify({
    "id_inmobiliaria": idInmobiliaria,
    "cliente": documento,
    //"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2xvY2F0b3IiOiJ1c3IxIiwiZXhwIjoxNjY0OTM4MTY3fQ.aXz_Tctye_0umATdDKE2r2iKxVXz9L4SFcR24V6C_eY"
    "access_token": user_token
  });
  
  console.log('data_cli',data_cli)

  options = {
    method: 'POST',
    headers: WSHeaders,
    body: data_cli,
    redirect: 'follow'
  };
  
  console.log('options',options)
    const response = await fetch(apiUrl, options);
    const result = await response.json();
    return result
  


};
