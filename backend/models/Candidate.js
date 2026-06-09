const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    name: String,

    email: String,
    
    score: Number,

    matched: [String],

    missing: [String],

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Candidate",
    candidateSchema
);