import axios from 'axios';


class DiscoverServices {

    static getMerchant(city="singapore", filterType="hotels"){
        axios.get('http://localhost:8000/', {
            params: {
              city: city,
              filtertype: filterType
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}

export default DiscoverServices;