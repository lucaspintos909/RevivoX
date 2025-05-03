DO $$
BEGIN
    -- Check if the column is already UUID type
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'products' 
        AND column_name = 'id' 
        AND data_type = 'uuid'
    ) THEN
        -- First, create a temporary column to store the UUID if it doesn't exist
        IF NOT EXISTS (
            SELECT 1 
            FROM information_schema.columns 
            WHERE table_name = 'products' 
            AND column_name = 'new_id'
        ) THEN
            ALTER TABLE products ADD COLUMN new_id UUID DEFAULT gen_random_uuid();
        END IF;

        -- Update the temporary column with new UUIDs
        UPDATE products SET new_id = gen_random_uuid() WHERE new_id IS NULL;

        -- Drop the primary key constraint if it exists
        IF EXISTS (
            SELECT 1 
            FROM information_schema.table_constraints 
            WHERE table_name = 'products' 
            AND constraint_name = 'products_pkey'
        ) THEN
            ALTER TABLE products DROP CONSTRAINT products_pkey;
        END IF;

        -- Drop the old id column if it exists and is not UUID
        IF EXISTS (
            SELECT 1 
            FROM information_schema.columns 
            WHERE table_name = 'products' 
            AND column_name = 'id' 
            AND data_type != 'uuid'
        ) THEN
            ALTER TABLE products DROP COLUMN id;
        END IF;

        -- Rename the new_id column to id if it exists
        IF EXISTS (
            SELECT 1 
            FROM information_schema.columns 
            WHERE table_name = 'products' 
            AND column_name = 'new_id'
        ) THEN
            ALTER TABLE products RENAME COLUMN new_id TO id;
        END IF;

        -- Add primary key constraint to the new id column if it doesn't exist
        IF NOT EXISTS (
            SELECT 1 
            FROM information_schema.table_constraints 
            WHERE table_name = 'products' 
            AND constraint_name = 'products_pkey'
        ) THEN
            ALTER TABLE products ADD PRIMARY KEY (id);
        END IF;

        -- Make the id column not null if it isn't already
        IF EXISTS (
            SELECT 1 
            FROM information_schema.columns 
            WHERE table_name = 'products' 
            AND column_name = 'id' 
            AND is_nullable = 'YES'
        ) THEN
            ALTER TABLE products ALTER COLUMN id SET NOT NULL;
        END IF;
    END IF;
END $$; 