import { Schema, model, models, Document, Model } from 'mongoose';
import { nanoid } from 'nanoid';

import { metricsProps } from '@/constants';

export interface IUrl extends Document {
  code: string;
  url: string;
  clicked: number;
  createdAt: Date;
  updatedAt: Date;
  metrics: metricsProps[];
}

const UrlSchema = new Schema(
  {
    code: { type: String, unique: true, default: () => nanoid(7) },
    url: { type: String, required: true },
    clicked: { type: Number, default: 0 },
    metrics: [
      {
        title: { type: String, required: true },
        data: { type: Schema.Types.Mixed, default: {} },
      },
    ],
  },
  { timestamps: true }
);

const Urls = (models.Urls as Model<IUrl>) || model<IUrl>('Urls', UrlSchema);

export default Urls;
