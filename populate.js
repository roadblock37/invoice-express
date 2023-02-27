require('dotenv').config();
const data = require('./data.json');
const Invoice = require('./Models/invoiceModel');
const connectDB = require('./DB/connect');

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Invoice.create(data);
        console.log('database successfully populated');
        process.exit(0);
    } catch (error) {
        console.log(error);
        proccess.exit(1);
    }
}

start()