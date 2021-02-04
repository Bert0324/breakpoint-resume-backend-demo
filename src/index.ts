import express from 'express';
import multer from 'multer';
import { json } from 'body-parser';
import { cors } from './cors';
import { breakpointResume } from './breakpoint';

const app = express();
app.use(cors);
app.use(json());
app.use(multer({ dest: 'uploads/' }).single('buffer'));
app.post('/breakpoint', breakpointResume);

app.listen(3001, () => console.log('started in 3000'));