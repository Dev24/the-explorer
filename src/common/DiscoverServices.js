import axios from 'axios';


class DiscoverServices {


    static serviceLogin(){
        axios.request({
        url: "/auth/oauth/v2/token",
        method: "post",
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        baseURL: "https://apis.discover.com",
        auth: {
            username: "l7xx8ed3fa1890d547aca97d9c703985d2d7", // This is the client_id
            password: "be3cbecfcbd54435a2ae3f1821cf398d" // This is the client_secret
        },
        data: {
            "grant_type": "client_credentials",
            "scope": "CITYGUIDES"    
        }
        }).then(respose => {
            console.log(respose);  
        });
    }


}

export default DiscoverServices;