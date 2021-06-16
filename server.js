const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()
const config = require('./config')

app.use(express.json());

// database
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => console.log("database connected"));

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find().sort({_id:-1}).limit(6);
    res.render('index', { shortUrls: shortUrls })
})

app.post('/shorturls', async (req, res) => {
    await ShortUrl.create({
        full: req.body.fullUrl
    })
    res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

// creating server and running
app.listen(config.PORT, () =>
    console.log(`server is running at http://localhost:${config.PORT}`)
);