-- Migration: 0004_add_specs_to_products

-- Description: Add specs column to products table with default values

DO $$
BEGIN
    -- Agregar la columna specs si no existe
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'products' 
        AND column_name = 'specs'
    ) THEN
        ALTER TABLE products 
        ADD COLUMN specs JSONB DEFAULT '{
            "processor": "",
            "ram": "",
            "storage": "",
            "display": "",
            "os": "",
            "condition": "Reacondicionado",
            "extras": {
                "fingerprint": false,
                "facialRecognition": false,
                "backlitKeyboard": false,
                "touchScreen": false,
                "thunderbolt": false,
                "hdmi": false,
                "usbC": false,
                "webcam": false,
                "bluetooth": false,
                "wifi6": false
            }
        }'::jsonb;
    END IF;

    -- Actualizar solo los registros que no tienen specs o tienen una estructura incompleta
    UPDATE products 
    SET specs = jsonb_build_object(
        'processor', COALESCE(specs->>'processor', ''),
        'ram', COALESCE(specs->>'ram', ''),
        'storage', COALESCE(specs->>'storage', ''),
        'display', COALESCE(specs->>'display', ''),
        'os', COALESCE(specs->>'os', ''),
        'condition', COALESCE(specs->>'condition', 'Reacondicionado'),
        'extras', COALESCE(
            specs->'extras',
            jsonb_build_object(
                'fingerprint', false,
                'facialRecognition', false,
                'backlitKeyboard', false,
                'touchScreen', false,
                'thunderbolt', false,
                'hdmi', false,
                'usbC', false,
                'webcam', false,
                'bluetooth', false,
                'wifi6', false
            )
        )
    )
    WHERE specs IS NULL 
    OR specs->>'processor' IS NULL 
    OR specs->>'ram' IS NULL 
    OR specs->>'storage' IS NULL 
    OR specs->>'display' IS NULL 
    OR specs->>'os' IS NULL 
    OR specs->>'condition' IS NULL 
    OR specs->'extras' IS NULL;
END $$; 