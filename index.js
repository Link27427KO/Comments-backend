const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
const config = require('config')
const PORT = config.get('port') || 5000

app.use(express.json())
app.use(cors())
app.use('/comment', require('./routes/comments.route.js'))

async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, () => console.log('MongoDB connected'))

        app.listen(PORT, () => {
            console.log('App has been started')
        })
    }
    catch (e) {
        console.log(e)
    }
}

start()