import { calculator } from '@repo/fp'
import express from 'express'

express()
  .get('/', (req, res) => res.send('hello apps'))
  .get('/add', (req, res) => {
    console.log(calculator.add(10, 20))
    return res.send('hello world')
  })
  .get('/min', (req, res) => {
    console.log(calculator.min(10, 20))
    return res.send('hello world')
  })
  .get('/div', (req, res) => {
    console.log(calculator.div(10, 20))
    return res.send('hello world')
  })
  .get('/mul', (req, res) => {
    console.log(calculator.mul(10, 20))
    return res.send('hello world')
  })
  .listen(3000, () => console.log('connect localhost:3000'))
