const axios = require('axios')


const DRIVERS_ENDPOINT = 'http://localhost:8081'

const Query = {
  driver: (id) => axios.get(`${DRIVERS_ENDPOINT}/${id}`).then((result) => result.data).catch((err) => err),

  drivers: () => axios.get(DRIVERS_ENDPOINT).then((result) => result.data).catch((err) => err),
};

const Mutation = {
  updateDriver: (data) => axios.put(`${DRIVERS_ENDPOINT}/${data.id}`, data).then((result) => result.data).catch((err) => err)
}

module.exports = {
  Query,
  Mutation
}
