const mongoose = require('mongoose');
 
const playerSchema = mongoose.Schema({
    name: String,
    avatar: String,
    winnings: Number,
    nativeOf: String,
    flag: String,
    created: { 
        type: Date,
        default: Date.now
    }
});
 
let Player = mongoose.model('Player', playerSchema);

module.exports = Player;