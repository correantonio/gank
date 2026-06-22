import React from 'react';
import SectionIcon from './SectionIcon';

const SectionHeader = ({icon, children}) => {

  return (
    <header>
      <SectionIcon icon={icon} />
      <h2 className="title-h2">
        {children}
      </h2>
    </header>
  );
};

export default SectionHeader;
