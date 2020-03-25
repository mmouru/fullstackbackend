const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(cors())


morgan.token('post', (req, res) => {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] :response-time ms :post'))

let users = [
      { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
    ]

  app.get('/api/persons', (req, res) => {
    res.json(users)
    console.log(users)
  })
  
  app.get('/info', (req, res) => {
    const amount = users.length
    var today = new Date()
    res.send(`<p> Phonebook has info for ${amount} people <br> ${today} </p>`)
    
  })  

  app.get('/api/persons/:id', (req, res) => {
      const id = Number(req.params.id)
      const person = users.find(user => user.id === id)
      res.json(person)
  })

  app.delete('/api/persons/:id', (req, res) => {
      const id = Number(req.params.id)
      users = users.filter(user => user.id !== id)

      res.status(204).end()
  })

  const generateId = () => {
    return Math.floor(Math.random() * 1000)
  }

  app.post('/api/persons', (req, res) => {
      if (!req.body.name || !req.body.number) {
          return res.status(400).json({
              error: 'name or number missing'
          })
      }
      else if (users.some(user => user.name === req.body.name)) {
        return res.status(400).json({ 
          error: 'name already in use' 
        })

      }
      const newUser = {
          name : req.body.name,
          number : req.body.number,
          id: generateId()
      }
      res.json(newUser)
  })

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
  })