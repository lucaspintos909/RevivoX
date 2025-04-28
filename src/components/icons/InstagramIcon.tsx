import Image from 'next/image';

interface InstagramIconProps {
  className?: string;
}

/* Instagram Icons */
/* https://static.xx.fbcdn.net/rsrc.php/yz/r/DUMoPBiKVc5.ico */
/* https://static.xx.fbcdn.net/rsrc.php/v4/yx/r/tBxa1IFcTQH.png */

export default function InstagramIcon({ className = "w-5 h-5" }: InstagramIconProps) {
  return (
    <Image 
      src="https://static.xx.fbcdn.net/rsrc.php/v4/yx/r/tBxa1IFcTQH.png" 
      alt="Instagram" 
      width={20}
      height={20}
      className={className}
      aria-hidden="true"
    />
  );
} 