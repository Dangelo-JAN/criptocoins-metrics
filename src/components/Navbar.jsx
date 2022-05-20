import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins } from '../redux/Coins/Coins';

const Navbar = () => {
  return (
    <>
      <h1>Hello micronauts</h1>
      <button type="button" onClick={(e) => e.preventDefault()}>Verificando la API</button>
    </>
  );
};

export default Navbar;
