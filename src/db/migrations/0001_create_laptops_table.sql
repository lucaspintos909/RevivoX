-- Eliminar el trigger si existe
DROP TRIGGER IF EXISTS update_laptops_updated_at ON laptops;

-- Eliminar la función si existe
DROP FUNCTION IF EXISTS update_updated_at_column();

-- Crear la tabla si no existe
CREATE TABLE IF NOT EXISTS laptops (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  vendido BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Crear la función para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Crear el trigger
CREATE TRIGGER update_laptops_updated_at
  BEFORE UPDATE ON laptops
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column(); 