import { useState } from "react";

import {
  Container, Menu, RightMenu,
  CustomMenu, BurgerNav, CustomClose
} from "./header.styles";

const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false)
  const navData = ["Model S", "Model 3", "Model X", "Model Y", "Solar Panel", "Solar Roof",
    "Existing Inventory", "Used Inventory", "Trade-in", "Cybertruck", "Roadster", "Semi",
    "Charging", "Powerwall", "Commercial Energy", "Utilities", "Test Drive"
  ]

  return (
    <Container>
      <a href="/">
        <img src="/tesla-images/logo.svg" alt="logo" />
      </a>

      <Menu>
        {
          navData.splice(0, 4).map((item, idx) => (
            <a href="#" key={item + idx}>{item}</a>
          ))
        }
      </Menu>

      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)} />

        {
          navData.map((item, idx) => (
            <li key={item + idx}>
              <a href="/">{item}</a>
            </li>
          ))
        }
      </BurgerNav>
    </Container >
  )
}

export default Header