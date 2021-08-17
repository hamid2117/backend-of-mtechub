// const app = require('./app')
import app from './app.js'

const port = 'https://stark-sierra-72569.herokuapp.com/' || 5000
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} : http://localhost:${port}`
  )
})
