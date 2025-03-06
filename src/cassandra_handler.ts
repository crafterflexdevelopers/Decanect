import { Client } from 'cassandra-driver';
import * as dotenv from 'dotenv';

class CassandraHandler {
  private client:Client | null = null;

  constructor() {
    try {
      dotenv.config();

      const CASSANDRA_CONTACT_POINT = process.env.CASSANDRA_HOST + ':' + process.env.CASSANDRA_PORT;

      this.client = new Client({
        contactPoints: [CASSANDRA_CONTACT_POINT],
        localDataCenter: 'datacenter1',
        keyspace: process.env.CASSANDRA_KEYSPACE
      });
    } catch(error) {
      console.error(error);
    }
  }

  async connect() {
    if(this.client !== null) {
      try {
        await this.client.connect();
        console.error("Connected to cassandra successfully.");
      } catch(error) {
        console.error(error);
      }
    }
  }

  async disconnect() {
    if(this.client !== null) {
      try {
        await this.client.shutdown();
        console.error("Disconnected from cassandra successfully.");
      } catch(error) {
        console.error(error);
      }
    }
  }
}

export default CassandraHandler;