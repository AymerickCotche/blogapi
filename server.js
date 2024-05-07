require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const expressJSDocSwagger = require('express-jsdoc-swagger')

const router = require('./app/router')

const app = express()

const options = {
  info: {
    version: '1.0.0',
    title: 'Blog API',
    description: 'A Blog REST API',
    license: {
      name: 'MIT',
    },
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
  },
  baseDir: __dirname,
  filesPattern: './**/*.js',
  swaggerUIPath: '/api-docs',
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: '/api-docs',
  notRequiredAsNullable: false,
  swaggerUiOptions: {},
}

const docMW = expressJSDocSwagger(app)

docMW(options)

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(cors({
  origin: '*',
  exposedHeaders: 'Authorization'
}))

app.use('', router)

module.exports = app