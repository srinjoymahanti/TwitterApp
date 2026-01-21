import express from 'express';
import morgan from 'morgan';


const app=express();
console.log(import.meta);

app.use(morgan('combined'));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!');
})



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});