import React from 'react';
import { cn } from '@/lib/utils';
import { ShoppingCart, GlobeX, Hammer, Star, Phone, DatabaseZap, Newspaper, SquareMousePointer } from 'lucide-react';

const SectionIcon = ({icon , className, size = 40}) => {
  const ICON_TYPE = {
    cart: {
      Icon: ShoppingCart,
    },
    globe: {
      Icon: GlobeX,
    },
    hammer: {
      Icon: Hammer,
    },
    star: {
      Icon: Star,
    },
    phone: {
      Icon: Phone,
    },
    database: {
      Icon: DatabaseZap
    },
    newspaper: {
      Icon: Newspaper
    },
     mousepointer: {
      Icon: SquareMousePointer
    }
  };

  const {Icon} = ICON_TYPE[icon];

  return (
    <div
      className={cn("p-4 overflow-hidden inline-flex items-center mb-4 w-fit border border-gank-100/25 rounded-lg", className)}
      style={{
        background:
          'radial-gradient(ellipse 102.11% 102.11% at 0.00% 0.00%, var(--color-gank-600__main), #130117)',
        boxShadow:
          '4px 4px 16px rgba(201, 139, 217, 0.50) inset, 6px 6px 16px rgba(12, 0, 15, 0.50) inset',
      }}
    >
      <Icon className="text-gank-100" strokeWidth={2} size={size} />
    </div>
  );
};

export default SectionIcon;
