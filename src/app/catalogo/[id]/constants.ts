import { 
  Cpu,
  MemoryStick,
  HardDrive,
  MonitorSmartphone,
  Laptop,
  CheckCircle,
  Fingerprint,
  ScanFace,
  Keyboard,
  Zap,
  Monitor,
  Usb,
  Video,
  Bluetooth,
  Wifi
} from 'lucide-react';

// Constantes para las especificaciones técnicas
export const TECHNICAL_SPECS = [
  { key: 'processor', icon: Cpu, label: 'Procesador' },
  { key: 'ram', icon: MemoryStick, label: 'Memoria RAM' },
  { key: 'storage', icon: HardDrive, label: 'Almacenamiento' },
  { key: 'display', icon: MonitorSmartphone, label: 'Pantalla' },
  { key: 'os', icon: Laptop, label: 'Sistema operativo' },
  { key: 'condition', icon: CheckCircle, label: 'Estado' }
] as const;

// Constantes para las características adicionales
export const EXTRA_FEATURES = [
  { key: 'fingerprint', icon: Fingerprint, label: 'Lector de huella' },
  { key: 'facialRecognition', icon: ScanFace, label: 'Reconocimiento facial' },
  { key: 'backlitKeyboard', icon: Keyboard, label: 'Teclado retroiluminado' },
  { key: 'touchScreen', icon: Monitor, label: 'Pantalla táctil' },
  { key: 'thunderbolt', icon: Zap, label: 'Puerto Thunderbolt' },
  { key: 'hdmi', icon: Monitor, label: 'Puerto HDMI' },
  { key: 'usbC', icon: Usb, label: 'USB-C' },
  { key: 'webcam', icon: Video, label: 'Webcam' },
  { key: 'bluetooth', icon: Bluetooth, label: 'Bluetooth' },
  { key: 'wifi6', icon: Wifi, label: 'WiFi 6' }
] as const; 