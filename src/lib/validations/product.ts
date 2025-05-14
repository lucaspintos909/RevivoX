import { z } from 'zod';

export const productTypeSchema = z.enum(['laptop', 'minipc', 'accessory', 'other']);

export const productQuerySchema = z.object({
  type: productTypeSchema.optional(),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  offset: z.coerce.number().int().min(0).optional().default(0),
  sortBy: z.enum(['price', 'created_at']).optional().default('price'),
  order: z.enum(['asc', 'desc']).optional().default('asc'),
});

export const productSchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(255),
  short_description: z.string().min(1).max(150),
  description: z.string().min(1),
  image: z.string().url(),
  price: z.number().min(0),
  sold: z.boolean(),
  type: productTypeSchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export const productsResponseSchema = z.object({
  data: z.array(productSchema),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
}); 