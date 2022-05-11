import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${className ? `${className} ` : ''}container px-4 mx-auto sm:px-24`}>
      {children}
    </div>
  );
};
