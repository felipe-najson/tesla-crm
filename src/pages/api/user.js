import { MongoClient } from 'mongodb';
const bcrypt = require('bcrypt');

async function handler(req, res) {
  if (req.method === 'GET') {
    let client;

    try {
      client = await MongoClient.connect('mongodb://127.0.0.1:27017/tesla');
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();
    let result;
    try {
      result = await db.collection('users').find().toArray();
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }
    client.close();
    res.status(200).json(result);
  }

  if (req.method === 'POST') {
    const {
      email,
      password,
      username,
      name,
      lastName,
      birthday,
      country,
      language,
    } = req.body;

    const newUser = {
      email,
      password,
      username,
      name,
      lastName,
      birthday,
      country,
      language,
    };

    const salt = await bcrypt.genSalt(1);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    let client;

    try {
      client = await MongoClient.connect('mongodb://127.0.0.1:27017/tesla');
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('users').insertOne(newUser);
      newUser.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', user: newUser });
  }
}

export default handler;
