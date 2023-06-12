'use strict';
const express = require('express');
const app= express()
const cors = require('cors')
app.use(cors())

const stamper = require('./middleware/stamper');
const pagNotFound =require ('./middleware/404')
const serverError=require('./middleware/500')


// home page handler
app.get('/', stamper,handleHome)
app.get('/error', testServerError);

app.use("*",pagNotFound)
  

app.use(serverError)

function handleHome(req, res) {
    res.status(200).json({
      code: 200,
      message: 'Welcome to Home page',
      time: req.stamper
    })
  }

// just a function to test error 500
  function testServerError(req, res, next) {
    req.body = {
        test: 'test'
      }
      next({message: 'server Error'})
  
  }

  module.exports = {
    app,
    start
  }
///
function start (PORT){
app.listen(PORT ,() =>{
    console.log(`lets gooo on PORT: ${PORT}`)
})}
// app.listen(PORT ,() =>{
//     console.log(`lets gooo on PORT: ${PORT}`)
// })