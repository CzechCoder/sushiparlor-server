import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    img: String,
    name: String,
    qty: Number,
    description: String,
});