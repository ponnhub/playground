const express = require('express')
const app = express()
const port = 3011


const { neubiberger } = require('./neubiberg-members.json')
neubiberger.map(m => (console.log([`"${m.fullname}"`, `"${m.fullname}"`, 
 ...m.rank ? [`"${[m.rank, m.fullname].join("")}"`] : [],
 ...m.nickname ? [`"${m.nickname}"`] : [], 
 ...m.nickname ? [`"${[m.nickname, m.afaps].join(" ").trim()}"`]: []]
 .join(","))))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Playground app listening on port ${port}`)
})