import axios from "axios";

function getActors() {
    return axios
        .get('https://www.breakingbadapi.com/api/characters')
        .then(response => {
            return response.data;
        })
}

function getActor(id) {
    return axios
        .get(`https://www.breakingbadapi.com/api/characters/${id}`)
        .then(response => {
            
            return response.data[0];
        })
}

function getQuote(user) {
    return axios
        .get(`https://breakingbadapi.com/api/quote/random?author=` + user)
        .then(response => {
             
            return response.data[0];   
        })
}

export { getActors, getActor, getQuote };