import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'3264dd5c969241889f22d669c32419a1'
    }
})