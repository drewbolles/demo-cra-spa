import React from 'react';
import classNames from 'classnames';

export default function Container({ children, className }) {
  return (
    <div
      data-testid="container"
      className={classNames('container mx-auto', className)}
    >
      {children}
    </div>
  );
}
