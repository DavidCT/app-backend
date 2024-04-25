import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.port ?? 3000;

app.use(cors());

app.listen(port, () => {
    console.log('El servidor está escuchando en el puerto ${port}');
});

app.post('/api/documentacion', async (req, res) => {

    ccxc

    return res.status(200).json({data : [ ] , mesagge : 'El archivo se cargó correctamente.'});
})
