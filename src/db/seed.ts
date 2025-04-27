import { db } from './config';
import { products, type NewProduct } from './schema';

const seedData: NewProduct[] = [
  {
    name: "MacBook Pro 13\" M1",
    description: "MacBook Pro con chip M1, 8GB RAM, 256GB SSD. Excelente estado, batería al 95%.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "899.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "Dell XPS 13",
    description: "Dell XPS 13, i7 11th gen, 16GB RAM, 512GB SSD. Pantalla 4K, teclado retroiluminado.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "799.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    description: "ThinkPad X1 Carbon, i5 10th gen, 8GB RAM, 256GB SSD. Teclado ergonómico, muy ligero.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "699.99",
    sold: true,
    type: "laptop"
  },
  {
    name: "Cargador USB-C 65W",
    description: "Cargador universal USB-C de 65W, compatible con la mayoría de laptops.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "29.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Mouse Inalámbrico",
    description: "Mouse inalámbrico ergonómico con conexión Bluetooth.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "19.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "HP Spectre x360",
    description: "HP Spectre x360, i7 11th gen, 16GB RAM, 1TB SSD. Convertible 2 en 1.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "999.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "MacBook Air M2",
    description: "MacBook Air con chip M2, 8GB RAM, 256GB SSD. Nueva generación.",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "1099.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "Asus ZenBook 14",
    description: "Asus ZenBook 14, Ryzen 7, 16GB RAM, 512GB SSD. Ultraligero.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "749.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "Microsoft Surface Laptop 4",
    description: "Surface Laptop 4, i5 11th gen, 8GB RAM, 512GB SSD.",
    image: "https://images.unsplash.com/photo-1523475496153-3d6cc7059a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "899.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "Lenovo IdeaPad 5",
    description: "IdeaPad 5, Ryzen 5, 8GB RAM, 256GB SSD. Gran relación calidad-precio.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "549.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "Base Refrigerante para Laptop",
    description: "Base con 5 ventiladores y luces LED para laptops de hasta 17 pulgadas.",
    image: "https://images.unsplash.com/photo-1610116384963-c6d8d41bde7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "24.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Teclado Mecánico Bluetooth",
    description: "Teclado mecánico compacto con switches rojos y conexión Bluetooth.",
    image: "https://images.unsplash.com/photo-1591363688299-14c97889f369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "89.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Monitor Portátil 15.6\"",
    description: "Monitor portátil Full HD de 15.6 pulgadas, ideal para trabajar en movilidad.",
    image: "https://images.unsplash.com/photo-1587825140708-5b6d85d2b5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "179.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Auriculares Bluetooth",
    description: "Auriculares con cancelación activa de ruido y 30 horas de batería.",
    image: "https://images.unsplash.com/photo-1585386959984-a4155227c1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "59.99",
    sold: true,
    type: "accessory"
  },
  {
    name: "Webcam HD 1080p",
    description: "Webcam con micrófono integrado, ideal para videollamadas y streaming.",
    image: "https://images.unsplash.com/photo-1581093588401-9b6c9d1d0ed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "39.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "MacBook Pro 16\" Intel",
    description: "MacBook Pro 16\" con i9, 16GB RAM, 1TB SSD. Potencia de sobra.",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b8d2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "1599.99",
    sold: true,
    type: "laptop"
  },
  {
    name: "Dell Latitude 7420",
    description: "Dell Latitude 7420, i5 11th gen, 16GB RAM, 256GB SSD.",
    image: "https://images.unsplash.com/photo-1587825140708-5b6d85d2b5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "849.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "Cámara de Seguridad WiFi",
    description: "Cámara de seguridad para interiores, controlable desde el móvil.",
    image: "https://images.unsplash.com/photo-1607726637985-d8b3f51f6b3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "49.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Hub USB-C 7 en 1",
    description: "Adaptador multifunción con HDMI, USB-A, SD y microSD.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "34.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Tablet Samsung Galaxy Tab S7",
    description: "Tablet de alto rendimiento para productividad y entretenimiento.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "599.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "SSD Externo 1TB",
    description: "Unidad SSD externa portátil con USB 3.2 para alta velocidad de transferencia.",
    image: "https://images.unsplash.com/photo-1599058917212-d6b49284c04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "129.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Soporte Ajustable para Laptop",
    description: "Soporte de aluminio ajustable, mejora la postura y la refrigeración.",
    image: "https://images.unsplash.com/photo-1600185366137-1d1a11b9d6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "19.99",
    sold: true,
    type: "accessory"
  },
  {
    name: "Lenovo Yoga Slim 7",
    description: "Yoga Slim 7, Ryzen 7, 16GB RAM, 512GB SSD. Diseño premium.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "949.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "Adaptador HDMI a VGA",
    description: "Conecta tu laptop moderna a proyectores o monitores antiguos.",
    image: "https://images.unsplash.com/photo-1587825140708-5b6d85d2b5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "14.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "HP Envy 13",
    description: "HP Envy 13, i7 10th gen, 8GB RAM, 512GB SSD. Elegante y potente.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "799.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "MacBook Pro 14\" M3",
    description: "Nuevo MacBook Pro con chip M3, 16GB RAM, 512GB SSD.",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "1999.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "Funda para Laptop 13\"",
    description: "Funda acolchada resistente al agua para laptops de 13 pulgadas.",
    image: "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "15.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Cable USB-C a USB-C",
    description: "Cable de carga rápida USB-C a USB-C de 2 metros.",
    image: "https://images.unsplash.com/photo-1617112884497-bb5fa4a89389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "9.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Acer Swift 3",
    description: "Acer Swift 3, Ryzen 5, 8GB RAM, 512GB SSD. Ligero y rápido.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "649.99",
    sold: false,
    type: "laptop"
  },
  {
    name: "Docking Station USB-C",
    description: "Base para laptop con múltiples puertos y carga simultánea.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "99.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Logitech MX Master 3",
    description: "Mouse profesional ergonómico, batería de larga duración.",
    image: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "89.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "iPad Air 2022",
    description: "iPad Air de 5ta generación, chip M1, 64GB, WiFi.",
    image: "https://images.unsplash.com/photo-1623171119090-4e9bd7ef6c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "599.99",
    sold: false,
    type: "accessory"
  },
  {
    name: "Dell Inspiron 15",
    description: "Dell Inspiron 15, i5 12th gen, 8GB RAM, 512GB SSD.",
    image: "https://images.unsplash.com/photo-1587825140708-5b6d85d2b5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "729.99",
    sold: false,
    type: "laptop"
  }
];

async function seed() {
  try {
    await db.insert(products).values(seedData);
    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error inserting seed data:', error);
    process.exit(1);
  }
}

seed();