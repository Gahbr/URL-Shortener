import mongoose, { Schema, Document } from 'mongoose';

interface IUrl extends Document {
  original: string;
  short: number;
}

const urlSchema: Schema<IUrl> = new mongoose.Schema({
  original: { type: String, required: true },
  short: Number,
});

const Url = mongoose.model<IUrl>("Url", urlSchema);

export default Url;
