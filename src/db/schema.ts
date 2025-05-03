import { integer, pgTable, varchar, serial, text, decimal, boolean, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  discount: decimal('discount', { precision: 10, scale: 2 }).notNull(),
  sold: boolean('sold').default(false),
  type: text('type', { enum: ['laptop', 'minipc', 'accessory', 'other'] }).notNull().default('laptop'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow()
});

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: number
          name: string
          description: string
          image: string
          price: number
          sold: boolean
          type: 'laptop' | 'services' | 'accessory' | 'other'
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          description: string
          image: string
          price: number
          sold?: boolean
          type: 'laptop' | 'services' | 'accessory' | 'other'
          created_at?: string
        }
        Update: {
          id?: number
          name?: string
          description?: string
          image?: string
          price?: number
          sold?: boolean
          type?: 'laptop' | 'services' | 'accessory' | 'other'
          created_at?: string
        }
      }
    }
  }
}
