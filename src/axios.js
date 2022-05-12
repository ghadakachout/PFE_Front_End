import axios from "axios" ;

const instance = axios.create({
    baseURL: '/',
    headers : {
        'Authorization': 'pk_4535956_E9JSQZDLNBQ8NNEWR0WYIBKJ1UC1V9D5'
    }
}) ;
export default instance ;
