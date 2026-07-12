import React from 'react';
import SectionIcon from './SectionIcon';
import { cn } from '@/lib/utils';

const SectionHeader = ({icon, children, className}) => {

  return (
    <header className={cn("", className)} >
      <SectionIcon icon={icon}/>
      <h2 className="title-h2">
        {children}
      </h2>
    </header>
  );
};

export default SectionHeader;
