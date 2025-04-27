import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL no está definida en el archivo .env');
}

console.log('Conectando a la base de datos...');
export const client = postgres(connectionString, {
  debug: true,
  max: 1,
  onnotice: (notice) => console.log('Notice:', notice),
  onparameter: (key, value) => console.log('Parameter:', key, value),
});

export const db = drizzle(client); 