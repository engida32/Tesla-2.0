/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Container, Menu, RightMenu, CustomCloseBtn, CustomMenu, BurgerNav, CloseWrapper } from '../style/header_style'
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>

      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
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

        <li> <a href='#'> Existing Inventory</a></li>
        <li> <a href='#'> Used Inventory</a></li>
        <li> <a href='#'> Trade In</a></li>
        <li> <a href='#'> Cybertruck</a></li>
        <li> <a href='#'>Roadstar</a></li>
        <li> <a href='#'> Existing Inventory</a></li>
        <li> <a href='#'> Existing Inventory</a></li>
        <li> <a href='#'> Existing Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header
