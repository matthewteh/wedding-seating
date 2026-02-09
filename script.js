let token = ''

async function init() {
  const res = await fetch('http://localhost:3000/api/token/event123')
  const data = await res.json()
  token = data.token
}

async function search() {
  const name = document.getElementById('nameInput').value

  const res = await fetch(`http://localhost:3000/api/search?name=${name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const guests = await res.json()
  const result = document.getElementById('result')

  if (guests.length === 0) {
    result.innerHTML = 'No guest found.'
    return
  }

  result.innerHTML = guests
    .map((g) => `<p>${g.name} — Table ${g.table_number}, Seat ${g.seat}</p>`)
    .join('')
}

init()
