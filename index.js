const express = require('express');
require('dotenv'.config());
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencodes({extended:false}));
app.use(express.static);