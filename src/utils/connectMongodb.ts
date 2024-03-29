import mongoose from 'mongoose';

import getConfigVariable from './getConfigVariable';

const MONGODB_URI = getConfigVariable('MONGODB_URI');

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

/**
 * Establishes a connection to MongoDB using the provided URI.
 *
 * This function checks if there's an active connection. If a connection already exists,
 * it returns true. Otherwise, it attempts to connect to the MongoDB instance using
 * the provided URI.
 *
 * @example
 * ```typescript
 * await connectMongodb();
 * ```
 *
 * @returns {Promise<boolean>} - A promise that resolves to true when a successful connection is established.
 */

const connectMongodb = async (): Promise<boolean> => {
  if (!MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
};

export default connectMongodb;
