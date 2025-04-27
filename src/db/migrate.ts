import postgres from 'postgres';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('DATABASE_URL no está definida en el archivo .env');
  process.exit(1);
}

const sql = postgres(connectionString, { max: 1 });

async function runMigrations() {
  try {
    const migrationsDir = path.join(process.cwd(), 'src/db/migrations');
    const files = fs.readdirSync(migrationsDir).sort();

    for (const file of files) {
      if (file.endsWith('.sql')) {
        console.log(`Running migration: ${file}`);
        const migration = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
        await sql.unsafe(migration);
        console.log(`Migration ${file} completed successfully`);
      }
    }

    console.log('All migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

runMigrations(); 