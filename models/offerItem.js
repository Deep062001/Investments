import mongoose from "mongoose";

const offerItemSchema = mongoose.Schema({
    invester: String,
    amount: Number,
    equity: Number,
    comment: String,
});

const offerItem = mongoose.model('offerItem', offerItemSchema);

export default offerItem;