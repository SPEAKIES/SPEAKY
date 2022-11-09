// @ts-check

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.DB_URI_ATLAS_TETZ;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
