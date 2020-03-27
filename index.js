require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))


morgan.token('post', (req, res) => {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] :response-time ms :post'))

  app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
      res.json(persons)
    })
  })
  
  app.get('/info', (req, res) => {
    const amount = users.length
    var today = new Date()
    res.send(`<p> Phonebook has info for ${amount} people <br> ${today} </p>`)
    
  })  

  app.get('/api/persons/:id', (req, res, next) => {
      Person.findById(req.params.id)
      .then(person => {
        res.json(person)
      })
      .catch(error => next(error))
  })

  app.delete('/api/persons/:id', (req, res, next) => {
      Person.findByIdAndRemove(req.params.id)
      .then(result => {
        res.status(204).end()
      })
      .catch(error => next(error))
  })

  app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
    const person = {
      name: body.name,
      number: body.number
    }
    Person.findByIdAndUpdate(req.params.id, person, {new: true})
    .then(updatedPerson => {
      res.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
  })

  app.post('/api/persons', (req, res) => {
      const body = req.body
      
      if (body.name === '' || body.number === '') {
        return res.status(400).json({ error: 'content missing'})
      }

      const person = new Person({
        name: body.name,
        number: body.number
      })
      person.save().then(savedPerson => {
        res.json(savedPerson.toJSON())
      })
  })

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

  app.use(unknownEndpoint)

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
    }
  
    next(error)
  }
  
  app.use(errorHandler)

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
  })