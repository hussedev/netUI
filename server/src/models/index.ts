import * as mongoose from 'mongoose';
import { dbConf } from '../config';

export const Document = mongoose.Document;
export const Model = mongoose.Model;
export const model = mongoose.model;
export const Types = mongoose.Types;
export const Schema = mongoose.Schema;
export const Query = mongoose.Query;

mongoose.connect(`${dbConf.uri}${dbConf.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;
