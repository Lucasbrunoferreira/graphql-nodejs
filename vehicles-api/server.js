var express = require('express');
var app = express();

let vehicles = require('./data.json')


app.get('/', async (req, res) => {
  const { description } = req.query

  if (!description) {
    return res.send(vehicles);
  }

  const response = await vehicles.filter(vehicle => vehicle.brand.toLowerCase().includes(description.toLowerCase()) || vehicle.model.toLowerCase().includes(description.toLowerCase()))

  return res.send(response)
});


app.get('/:id', async (req, res) => {
  const { id } = req.params

  const response = await vehicles.filter(vehicle => vehicle.id == id)

  return res.send(response[0])
})

app.get('/owner/:id', async (req, res) => {
  const { id } = req.params

  const response = await vehicles.filter(vehicle => vehicle.owner == id)

  return res.send(response[0])
})

app.listen(8082, () => {
  console.log('🚙 Vehicles API is listening on port 8082!');
});
