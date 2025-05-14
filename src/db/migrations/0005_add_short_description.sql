-- Migration: 0005_add_short_description

-- Description: Add short_description column to products table

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

    -- Actualizar los registros existentes para generar un resumen de la descripción
    UPDATE products 
    SET short_description = SUBSTRING(description, 1, 150) || '...'
    WHERE short_description = '';
END $$; 