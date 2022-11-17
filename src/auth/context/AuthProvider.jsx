import { useReducer } from "react"

import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const init = () => {
    const objUser = JSON.parse( localStorage.getItem('objLoggedUser') )

    return {
        logged: !!objUser,
        objUser: objUser
    }
}

export const AuthProvider = ( { children } ) => {

    const [ objAuthState, dispatch ] = useReducer( authReducer, {} , init )

    const onLoginAuth = async ( userName , password ) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Accept', '*/*');
        myHeaders.append('Connection', 'keep-alive');
        
        let apiUrl;
        var options="";
        var data ={"usuario":userName, "password":password}
        const WSHeader = new Headers();
        WSHeader.append('Content-Type', 'application/json');
        apiUrl = "https://wxh2pko01h.execute-api.us-east-1.amazonaws.com/avanto_login";
        options = {
            method: 'POST',
            body: JSON.stringify(data),
            WSHeader,
        };
         
        fetch(apiUrl, options)
        .then(res => res.json())
        .then(result => {
                console.log('result auth',result)
                if ( result.auth ){                    
                    
                    const objUser = {
                        id_usiuario: result.id_usuario,
                        nombre: result.nombre,
                        auth: result.auth,
                        cargo: result.cargo,
                        correo: result.correo,
                        mensaje: result.mensaje,
                        perfil: result.perfil,
                        token: result.token,
                        usuario: result.usuario,
                        clave: password
                    }
                    
                    //const action = {
                      //  type: types.login,
                        //payload: objUser
                    //}
        
                    localStorage.setItem('objLoggedUser',JSON.stringify(objUser) )

                    //dispatch( action )
        
                    console.log('AuthProvider objUser',objUser)
                    return objUser
        
                }else{
                    return result
                }
            },
            (error) => {
                return error
            }
        )
       
    }

    const onLogoutAuth = () => {
        localStorage.removeItem('objLoggedUser')

        const action = {
            type: types.logout,
            payload: null
        }

        dispatch( action )
    }

    return (
        <AuthContext.Provider value={ {
            objAuthState,
            onLoginAuth,
            onLogoutAuth
        } } >
            { children }
        </AuthContext.Provider>
    )

}