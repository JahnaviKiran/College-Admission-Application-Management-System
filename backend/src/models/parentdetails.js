const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    }

})

const parentDetailsOne = new mongoose.model("parentDetailsOne", parentSchema);
module.exports = parentDetailsOne;

// const Register = new mongoose.model("Register", parentsSchema);