-- Migration: 0005_add_short_description

-- Description: Add short_description and sale_link columns to products table

DO $$
BEGIN
    -- Agregar la columna short_description si no existe
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'products' 
        AND column_name = 'short_description'
    ) THEN
        ALTER TABLE products 
        ADD COLUMN short_description TEXT NOT NULL DEFAULT '';
    END IF;

    -- Agregar la columna sale_link si no existe
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'products' 
        AND column_name = 'sale_link'
    ) THEN
        ALTER TABLE products 
        ADD COLUMN sale_link TEXT;
    END IF;

    -- Actualizar los registros existentes para generar un resumen de la descripción
    UPDATE products 
    SET short_description = SUBSTRING(description, 1, 150) || '...'
    WHERE short_description = '';
END $$; 