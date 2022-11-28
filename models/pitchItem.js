import mongoose from "mongoose";
import offerItem from "./offerItem.js";

const pitchItemSchema = mongoose.Schema({
    enterpreneur: String,
    pitchTitle : String,
    pitchIdea : String,
    askAmount: Number,
    equity: Number,
    offers: [{
        _id: String,
        invester: String,
        amount: Number,
        equity: Number,
        comment: String,
    }],
});

const pitchItem = mongoose.model('pitchItem', pitchItemSchema);

export default pitchItem;