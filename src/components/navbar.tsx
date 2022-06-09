import React from 'react'
import {NavbarContainer,NavbarInnerContainer,LeftContainer,LogoLeft,RightContainer,NavbarLinkContainer,NavbarLink} from '../styles/navbar.style.js'
import Logo from '../imgs/logo.png';

function navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
      <LeftContainer>
      <LogoLeft src={Logo}></LogoLeft>
      </LeftContainer>
      <RightContainer>
      <NavbarLinkContainer>
    <NavbarLink href="#action1">Home</NavbarLink>
          </NavbarLinkContainer>
          <NavbarLinkContainer>
    <NavbarLink href="#action2">Link</NavbarLink>
          </NavbarLinkContainer>
          <NavbarLinkContainer>
    <NavbarLink href="#action3">Action</NavbarLink>
          </NavbarLinkContainer>
          <NavbarLinkContainer>
    <NavbarLink href="#action4">Another action</NavbarLink>
          </NavbarLinkContainer>
          <NavbarLinkContainer>
    <NavbarLink href="#action5">Something else here</NavbarLink>
    
          </NavbarLinkContainer>
          
      </RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  )
}

export default navbar