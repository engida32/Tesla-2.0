/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Container, Menu, RightMenu, CustomCloseBtn, CustomMenu, BurgerNav, CloseWrapper } from '../style/header_style';
import { selectCar } from '../features/carSlice/carSlice';
import { useSelector } from 'react-redux';
function Header() {
  const cars = useSelector(selectCar);
  console.log(cars)

  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href='#'>{car}
          </a>
        
        ))}

      </Menu>
      <RightMenu>
        <a href='#'> Shop</a>
        <a href='#'> Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomCloseBtn onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        {cars && cars.map((car, index) => (
          <li> <a key={index} href='#'> {car}</a></li>

        ))}
        <li> <a href='#'> Existing Inventory</a></li>
        <li> <a href='#'> Used Inventory</a></li>
        <li> <a href='#'> Trade In</a></li>
        <li> <a href='#'> Cybertruck</a></li>
        <li> <a href='#'>Roadstar</a></li>
        <li> <a href='#'>Power Wall</a></li>
        <li> <a href='#'>Utilities</a></li>


      </BurgerNav>
    </Container>
  )
}

export default Header
