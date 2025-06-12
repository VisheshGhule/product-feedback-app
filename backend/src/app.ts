import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT ?? 3000;
const enivronment = process.env.NODE_ENV ?? 'development';
const envFile = enivronment === 'development' ? '.env.local' : '.env';

dotenv.config({ path: path.join(__dirname, envFile) });
app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (_req, res) => {
    res.send('Product Feedback API');
});

app.listen(PORT, () => {
    console.log(`Application Server is running on http://10.0.129.200:${3000}`);
});
