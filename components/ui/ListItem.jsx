import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

import { CheckCircle2, XCircle } from 'lucide-react';
const ListItem = ({ text, status = 'success', border }) => {
  const STATUS_CONFIG = {
    success: {
      Icon: CheckCircle2,
      iconColor: 'text-gank-green',
    },
    error: {
      Icon: XCircle,
      iconColor: 'text-gank-redness',
    },
  };

  const ListItemVariants = cva('flex items-center gap-2 px-4 py-2', {
    variants: {
      border: {
        fullBorder: 'border border-gank-p/25 rounded-xl',
        minBorderB: 'border-b border-gank-p/25',
      },
    },
  });

  const { Icon, iconColor } = STATUS_CONFIG[status] || STATUS_CONFIG.success;

  return (
    <li className={cn(ListItemVariants({ border }) )}>
      <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={1.5} />
      <span>{text}</span>
    </li>
  );

  // return (
  //   <li className="flex items-center gap-2 px-4 py-2">
  //     <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={2} />
  //     <span>{text}</span>
  //   </li>
  // );
};

export default ListItem;
