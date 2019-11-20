const express = require('express');
const fs = require('fs');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  let drivers = JSON.parse(fs.readFileSync('./data.json'))

  const { name } = req.query

  if (!name) {
    return res.send(drivers);
  }

  const response = await drivers.filter(driver => driver.name.toLowerCase().includes(name.toLowerCase()) || driver.surname.toLowerCase().includes(name.toLowerCase()))

  return res.send(response)
});


app.get('/:id', async (req, res) => {
  let drivers = JSON.parse(fs.readFileSync('./data.json'))

  const { id } = req.params

  const response = await drivers.filter(driver => driver.id == id)

  return res.send(response[0])
})


app.put('/:id', async (req, res) => {
  let drivers = JSON.parse(fs.readFileSync('./data.json'))

  const { id } = req.params

  const index = await drivers.findIndex(driver => driver.id == id)

  let driverUpdated = {
    ...drivers[index],
    ...req.body
  }

  drivers[index] = driverUpdated

  fs.writeFileSync('./data.json', JSON.stringify(drivers))

  return res.send(driverUpdated)
})

app.listen(8081, () => {
  console.log('👨 Drivers API is listening on port 8081!');
});
