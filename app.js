const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayout)
app.use(express.urlencoded({ extended: false }))

const indexRouter = require('./route/index')
app.use('/', indexRouter)

app.listen(3000)