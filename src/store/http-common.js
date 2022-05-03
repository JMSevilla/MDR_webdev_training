import axios from 'axios'

let headers = new Headers();
headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true')
headers.append('GET', 'POST', 'OPTIONS')
const requiredURL = process.env.VUE_APP_DEV_1;

class APIRequest { 
    HTTP() {
        const instance = axios.create({
            baseURL : 'http://localhost/be_project',
            headers: headers
        })
        return instance
    }
}

export default new APIRequest()