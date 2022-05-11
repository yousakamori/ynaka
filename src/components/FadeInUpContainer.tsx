import React from 'react';
import styles from './FadeInUpContainer.module.css';

type FadeInUpContainerProps = {
  children: React.ReactNode;
  animationDelay?: string;
  animationDuration?: string;
  className?: string;
};

export const FadeInUpContainer: React.FC<FadeInUpContainerProps> = ({
  children,
  animationDelay = '0.2s',
  animationDuration = '0.4s',
  className,
}) => {
  return (
    <div
      style={{ animationDelay, animationDuration }}
      className={`${className ? `${className} ` : ''}${styles.container}`}
    >
      {children}
    </div>
  );
};
