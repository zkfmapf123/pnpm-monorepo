import express from 'express'

express()
  .get('/', (req, res) => res.send('hello logins'))
  .listen(3001, () => console.log('connect localhost:3001'))
