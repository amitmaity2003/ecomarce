// Here we declare user collection
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "id": {
        "type": String,
        "required": true
    },
    "email": {
        "type": String,
        "required": true
    },
    "password": {
        "type": String,
        "required": true
    },
    "user_type": {
        "type": String,
        "enum": ["admin", "user"],
        "default": "user"
    },
    "createdAt": {
        "type": Date,
        "required": false
    }
});

const User = mongoose.model('User', userSchema);


module.exports = User;