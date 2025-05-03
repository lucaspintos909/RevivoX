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
  Wifi,
  LucideIcon
} from 'lucide-react';

interface TechnicalSpec {
  key: keyof {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    os: string;
    condition: string;
  };
  icon: LucideIcon;
  label: string;
}

interface ExtraFeature {
  key: keyof {
    fingerprint: boolean;
    facialRecognition: boolean;
    backlitKeyboard: boolean;
    touchScreen: boolean;
    thunderbolt: boolean;
    hdmi: boolean;
    usbC: boolean;
    webcam: boolean;
    bluetooth: boolean;
    wifi6: boolean;
  };
  icon: LucideIcon;
  label: string;
}

// Constantes para las especificaciones técnicas
export const TECHNICAL_SPECS: TechnicalSpec[] = [
  { key: 'processor', icon: Cpu, label: 'Procesador' },
  { key: 'ram', icon: MemoryStick, label: 'Memoria RAM' },
  { key: 'storage', icon: HardDrive, label: 'Almacenamiento' },
  { key: 'display', icon: MonitorSmartphone, label: 'Pantalla' },
  { key: 'os', icon: Laptop, label: 'Sistema operativo' },
  { key: 'condition', icon: CheckCircle, label: 'Estado' }
];

// Constantes para las características adicionales
export const EXTRA_FEATURES: ExtraFeature[] = [
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
]; 