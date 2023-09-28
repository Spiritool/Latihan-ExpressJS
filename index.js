const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Halo decks')
// })

const bodyPs = require('body-parser');
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

const mhsRouter = require('./routes/kartu_keluarga.js');
app.use('/api/kk', mhsRouter);

const ktpRouter = require('./routes/ktp.js');
app.use('/api/ktp', ktpRouter);

const detailRouter = require('./routes/detail_kk.js');
app.use('/api/dkk', detailRouter);

app.listen(port, () => {
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
}) 