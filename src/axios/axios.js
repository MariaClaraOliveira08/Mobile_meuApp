import axios from "axios";

const api = axios.create({
    baseURL: "http://10.89.234.150:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    
    postCadastro:(user)=>api.post("/user", user),
    postCadastroEvento:(evento)=>api.post("/evento"),
    postCadastroIngresso:(ingresso)=>api.post("/ingresso"),
    postCadastroOrganizador:(organizador)=>api.post("/organizador")

}
export default sheets;