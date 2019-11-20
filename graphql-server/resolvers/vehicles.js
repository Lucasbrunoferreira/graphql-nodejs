const axios = require('axios')


const DRIVERS_ENDPOINT = 'http://localhost:8082'

const Query = {
  vehicle: (id) => axios.get(`${DRIVERS_ENDPOINT}/${id}`).then((result) => result.data).catch((err) => err),

  vehicles: () => axios.get(DRIVERS_ENDPOINT).then((result) => result.data).catch((err) => err),

  vehicleByOwnerId: (ownerId) => axios.get(`${DRIVERS_ENDPOINT}/owner/${ownerId}`).then((result) => result.data).catch((err) => err)
};

module.exports = {
  Query
}



