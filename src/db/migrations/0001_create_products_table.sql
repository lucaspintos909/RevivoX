-- Migration: 0001_create_products_table

-- Description: Create products table with triggers

-- Crear la tabla si no existe
CREATE TABLE IF NOT EXISTS products (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
description TEXT NOT NULL,
image TEXT NOT NULL,
price DECIMAL(10,2) NOT NULL,
sold BOOLEAN DEFAULT FALSE,
type TEXT NOT NULL DEFAULT 'laptop',
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Eliminar el trigger si existe
DROP TRIGGER IF EXISTS update_products_updated_at ON products;

-- Eliminar la función si existe
DROP FUNCTION IF EXISTS update_updated_at_column();

-- Crear la función para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = CURRENT_TIMESTAMP;
RETURN NEW;
END;
$$ language 'plpgsql';

-- Crear el trigger
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();