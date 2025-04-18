import axios from "axios";

const api = axios.create({
    baseURL: "http://10.89.234.70:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    
    postCadastro:(user)=>api.post("/user", user),
    postCadastroEvento:(evento)=>api.get("/evento", evento),
    postCadastroIngresso:(ingresso)=>api.post("/ingresso", ingresso),
    postCadastroOrganizador:(organizador)=>api.post("/organizador", organizador),
    getEventos:() =>api.get("Eventos")

}
export default sheets;