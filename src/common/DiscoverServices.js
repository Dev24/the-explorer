import axios from 'axios';


class DiscoverServices {

    static async getMerchant(city="singapore", filterType="hotels"){
        axios.get('http://localhost:8000/', {
            params: {
              city: city,
              filtertype: filterType
            }
          })
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}

export default DiscoverServices;