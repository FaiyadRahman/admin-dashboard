const express = require("express")
const router = express.Router()
const path = require("path")
const PORT = process.env.PORT || 3500

const app = express()
app.use('/', express.static(path.join(__dirname, '/public')))

// routes
const rootRoute = require('./routes/root')

app.use('/', rootRoute)

// handle errors
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))