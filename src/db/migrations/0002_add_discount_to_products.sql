-- 0002_add_discount_to_products.sql

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name='products' AND column_name='discount'
    ) THEN
        ALTER TABLE products ADD COLUMN discount numeric(10,2) NOT NULL DEFAULT 0;
    END IF;
END$$; 