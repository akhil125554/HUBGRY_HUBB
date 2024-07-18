import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://21131a0504:Google%40125@clusterlatest.sco1hks.mongodb.net/?retryWrites=true&w=majority&appName=Clusterlatest'
    )
    .then(() => {
      console.log('DB Connected');
    });
};
