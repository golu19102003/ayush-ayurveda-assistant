import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();


// Mock Mongoose model for JSON Server
class MockModel {
  constructor(collectionName) {
    this.collectionName = collectionName;
    this.baseUrl = 'http://localhost:3005';
  }

  async find() {
    const response = await fetch(`${this.baseUrl}/${this.collectionName}`);
    return await response.json();
  }

  async create(data) {
    const response = await fetch(`${this.baseUrl}/${this.collectionName}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  // Add other methods as needed
  async findById(id) {
    const response = await fetch(`${this.baseUrl}/${this.collectionName}/${id}`);
    return await response.json();
  }
}

const connect = async () => {
  if (process.env.USE_JSON_SERVER === 'true') {
    console.log('✅ Using JSON Server at http://localhost:3005');
    
    // Return a mock Mongoose-like connection
    return {
      connection: {
        host: 'http://localhost:3005',
        readyState: 1,
        close: () => console.log('Disconnected from JSON Server')
      },
      model: (name) => new MockModel(name)
    };
  }
  
  // Original MongoDB connection code (kept for reference)
  try {
    console.log('Attempting to connect to MongoDB...');
    const connection = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ayurveda', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connected to MongoDB');
    return { connection };
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    throw error;
  }
};


export default connect;