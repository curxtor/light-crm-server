const express = require('express')
const app = express()
const port = process.argv.slice(2);
const cors = require('cors')
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('port', port[0])


app.get('/', (req,res) => {
    res.end('hello')
})


app.listen(app.get('port'), () => {
    console.log(`[ OK ] :: Server is running on port ${port}!`)
})