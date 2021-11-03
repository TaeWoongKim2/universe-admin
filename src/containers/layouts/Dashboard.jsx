import React from 'react';
import Header from '../../components/Common/Header';

export default ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
