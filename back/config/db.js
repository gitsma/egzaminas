const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO);
        console.log(`Mongo DB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log('Lost connection', error);
        process.exit(1);
    }
}

module.exports = connectDB;