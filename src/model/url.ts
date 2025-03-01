import mongoose, { Schema, Document } from "mongoose";

interface IUrl extends Document {
  original: string;
  short: string;
}

const urlSchema: Schema<IUrl> = new mongoose.Schema({
  original: { type: String, required: true },
  short: { type: String},
});

const Url = mongoose.model<IUrl>("Url", urlSchema);

export default Url;
