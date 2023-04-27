import React, { Children } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
        <Header />
        {Children}
    </>
  )
}

export default Layout