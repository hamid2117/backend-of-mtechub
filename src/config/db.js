import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/mtechub', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB Connected : ${conn.connection.host}`)
  } catch (error) {
    console.log(`Mongo error :${error}`)
    process.exit(1)
  }
}
export default connectDB
