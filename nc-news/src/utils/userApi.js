import axios from "axios";

export const fetchUsers = () => {
    return axios.get('https://steves-nc-news.herokuapp.com/api/users').then((response) =>{
        return response.data.users
    })
}


