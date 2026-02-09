const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/api/seat', (req, res) => {
  const name = req.query.name

  const guests = [
    { name: 'John Tan', table: 6, seat: 'B' },
    { name: 'Michelle Lim', table: 3, seat: 'A' },
  ]

  const guest = guests.find((g) => g.name.toLowerCase() === name.toLowerCase())

  if (guest) res.json(guest)
  else res.status(404).json({ message: 'Not found' })
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
