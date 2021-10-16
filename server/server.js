const mongoose = require('mongoose');

const DB=process.env.DB.replace("<PASSWORD>",process.env.DB_password)
mongoose.connect(DB).then(() => console.log('connted 🤑😲🥵🤬👾👽🙊'))