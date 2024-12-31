const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'https://www.zenithsolutionz.in', // Replace with your frontend URL
    // origin: "http://localhost:3000"
}));
app.use(express.json());

const PORT = 5000;

const emailroute =require("./routes/email")

app.use("/api/email", emailroute)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

