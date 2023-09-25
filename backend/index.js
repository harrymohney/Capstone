const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${PORT}`);
});