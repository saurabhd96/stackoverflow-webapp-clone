import express from 'express'

import { sql, mongo } from './loaders/db'

import './consumers/authConsumer'

const app = express();

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Kafka server running on port ${PORT}`);
});