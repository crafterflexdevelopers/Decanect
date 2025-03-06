import CassandraHandler from "./cassandra_handler";

async function main() {
  const cassandra_handler: CassandraHandler = new CassandraHandler();
  await cassandra_handler.connect();
  await cassandra_handler.disconnect();
}

main();