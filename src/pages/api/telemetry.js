let cassandra = require('cassandra-driver');
import { v4 as uuidv4 } from 'uuid';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { wave, temperature, vibration, pressure, voltage, speed, time } =
      req.body;

    let authProvider = new cassandra.auth.PlainTextAuthProvider(
      'cassandra',
      'cassandra'
    );
    let contactPoints = ['127.0.0.1:9042'];
    let localDataCenter = 'datacenter1';

    let client = new cassandra.Client({
      contactPoints: contactPoints,
      authProvider: authProvider,
      localDataCenter: localDataCenter,
      keyspace: 'tesla',
    });

    const query =
      'INSERT INTO tesla.telemetry (item_id, wave, temperature, vibration, pressure, voltage, speed, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';

    client
      .execute(
        query,
        [
          uuidv4(),
          wave,
          temperature,
          vibration,
          pressure,
          voltage,
          speed,
          time,
        ],
        {
          prepare: true,
        }
      )
      .then((result) => {
        console.log('Successfully inserted');
      })
      .catch((err) => {
        console.log('ERROR', err);
      });

    // Exit the program after all queries are complete
    Promise.allSettled([query]).finally(() => client.shutdown());
  }

  if (req.method === 'GET') {
    let authProvider = new cassandra.auth.PlainTextAuthProvider(
      'cassandra',
      'cassandra'
    );
    let contactPoints = ['127.0.0.1:9042'];
    let localDataCenter = 'datacenter1';

    let client = new cassandra.Client({
      contactPoints: contactPoints,
      authProvider: authProvider,
      localDataCenter: localDataCenter,
      keyspace: 'tesla',
    });

    const query = 'SELECT * FROM tesla.telemetry';
    const result = await client.execute(query, [], { prepare: true });

    Promise.allSettled([query]).finally(() => client.shutdown());

    console.log('llego aca');
    res.status(200).json(result.rows);
  }
}

export default handler;
