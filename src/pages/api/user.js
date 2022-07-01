import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, username } = req.body;

    const newUser = {
      email,
      password,
      username,
    };

    let client;

    try {
      client = await MongoClient.connect('mongodb://127.0.0.1:27017');
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
