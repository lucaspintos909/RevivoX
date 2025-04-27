import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('DATABASE_URL no está definida en el archivo .env');
  process.exit(1);
}

const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);

const laptops = [
  {
    nombre: "MacBook Pro 13\" M1",
    descripcion: "MacBook Pro con chip M1, 8GB RAM, 256GB SSD. Excelente estado, batería al 95%.",
    imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    precio: 899.99,
    vendido: false
  },
  {
    nombre: "Dell XPS 13",
    descripcion: "Dell XPS 13, i7 11th gen, 16GB RAM, 512GB SSD. Pantalla 4K, teclado retroiluminado.",
    imagen: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    precio: 799.99,
    vendido: false
  },
  {
    nombre: "Lenovo ThinkPad X1 Carbon",
    descripcion: "ThinkPad X1 Carbon, i5 10th gen, 8GB RAM, 256GB SSD. Teclado ergonómico, muy ligero.",
    imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    precio: 699.99,
    vendido: true
  }
];

async function seed() {
  try {
    for (const laptop of laptops) {
      await sql`
        INSERT INTO laptops (nombre, descripcion, imagen, precio, vendido)
        VALUES (${laptop.nombre}, ${laptop.descripcion}, ${laptop.imagen}, ${laptop.precio}, ${laptop.vendido})
      `;
    }
    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error inserting seed data:', error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

seed(); 