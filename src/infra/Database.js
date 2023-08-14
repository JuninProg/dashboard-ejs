const { MongoMemoryServer } = require('mongodb-memory-server');
const { default: mongoose } = require('mongoose');

module.exports.connect = async () => {
  const mongodb = await MongoMemoryServer.create();
  const uri = mongodb.getUri();
  await mongoose.connect(uri);
  console.info(`Mongodb connected => ${uri}`);
};
