import axios from "axios";
import { DisByID } from '../herramientas/display';

export const Random = async (isNumber, isName=false) => {
    if(isNumber){
        return Math.floor(Math.random()*100+1);
    }
    else{
        try{
            const respuesta = await axios.get("https://67093567af1a3998baa0c08b.mockapi.io/proy1/LitaTrabajos/"+String(Math.floor(Math.random()*100+1)));
            if(isName){
                return respuesta.data["Nombre"];
            }
            else{
                return respuesta.data["Trabajo"];
            }
        }
        catch{
            console.log(error.response)
        }
    }
    
}

export const getAllAPI = async () => {
    await axios.get("https://67093567af1a3998baa0c08b.mockapi.io/proy1/TrabajaMON/").then(
        (response) => {
            return response.data;
        }
    ).catch((error) => {
        console.log(error.response);
    });

}

export const getAPIbyID = async (id) => {
    try{
        const respuesta = await axios.get("https://67093567af1a3998baa0c08b.mockapi.io/proy1/TrabajaMON/"+String(id));
        return respuesta.data;
    }
    catch{
        console.log(error.response)
    }
}

export const postAPI = async () => {
    var Mon = {
        "nombre": document.getElementById("Nombre").value,
        "edad": document.getElementById("Edad").valueAsNumber,
        "profesion": document.getElementById("Profesion").value,
        "vida": document.getElementById("Vida").valueAsNumber,
        "ataque": document.getElementById("Ataque").valueAsNumber,
        "defensa": document.getElementById("Defensa").valueAsNumber,
        "velocidad": document.getElementById("Velocidad").valueAsNumber
    }
    try{
        axios.post("https://67093567af1a3998baa0c08b.mockapi.io/proy1/TrabajaMON",Mon)
    }
    catch{
        console.log(error.response)
    }
}

export const putAPI = async () => {
    const id = String(document.getElementById("buscarIDEditor").value);
    var Mon = {
        "nombre": document.getElementById("Nombre").value,
        "edad": document.getElementById("Edad").valueAsNumber,
        "profesion": document.getElementById("Profesion").value,
        "vida": document.getElementById("Vida").valueAsNumber,
        "ataque": document.getElementById("Ataque").valueAsNumber,
        "defensa": document.getElementById("Defensa").valueAsNumber,
        "velocidad": document.getElementById("Velocidad").valueAsNumber
    };
    try{
        await axios.put("https://67093567af1a3998baa0c08b.mockapi.io/proy1/TrabajaMON/"+id,Mon)
    }
    catch{
        console.log(error.response)
    }
}

export const deleteAPI = async () => {
    const id = String(document.getElementById("buscarID").value);
    try{
        await axios.delete("https://67093567af1a3998baa0c08b.mockapi.io/proy1/TrabajaMON/"+id).then( () => {
            document.getElementById("buscarID").value = () => {
                if(id == 1){
                    return 1
                }
                else{
                    return (parseInt(id)-1)
                }
            }
            DisByID()
        })
    }
    catch{
        console.log(error.response)
    }
}

export const setearEditor = async () => {
    const valor = document.getElementById("buscarIDEditor").value;
    await getAPIbyID(valor).then( (response)=>{
        document.getElementById('Nombre').value = response['nombre']
        document.getElementById('Profesion').value = response['profesion']
        document.getElementById('Edad').value = response['edad']
        document.getElementById('Ataque').value = response['ataque']
        document.getElementById('Defensa').value = response['defensa']
        document.getElementById('Vida').value = response['vida']
        document.getElementById('Velocidad').value = response['velocidad']
    })
}