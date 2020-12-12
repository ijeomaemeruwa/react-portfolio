import React from 'react'

import { VscGithub } from 'react-icons/vsc'
import { SiLinkedin } from 'react-icons/si'
import { FaTwitterSquare } from 'react-icons/fa'

import {
  SideBarContainer,
  Icon,
  CloseIcon,
  MenuWrapper,
  MobileMenu,
  MobileLink,
  SocialContact,
  SocialLink,
  MobileBtnWrap,
  SideNavButton,
  ResumeLink,
  //MobileBlogLink
} from '../SideBar/SideBarElements'


const SideBar = ({ isOpen, toggle }) => {
    return (
    <>
    <SideBarContainer isOpen={isOpen} onClick={toggle}>

    <Icon  onClick={toggle}>
    <CloseIcon/>
    </Icon>

    <MenuWrapper>
    <MobileMenu>
    <MobileLink to="/about" onClick={toggle} >About.</MobileLink>

    <MobileLink to="/projects" onClick={toggle}>Projects.</MobileLink>

    <MobileLink to="/tools" onClick={toggle}>Skills.</MobileLink>

    {/* <MobileBlogLink href="https://helloijeoma.hashnode.dev"  
    target="_blank"  rel="noopener noreferrer"
    >
    Blog
    </MobileBlogLink> */}

    <SocialContact>
    <SocialLink 
    href="https://github.com/ijeomaemeruwa" 
    target="_blank"  rel="noopener noreferrer">
    <VscGithub />
    </SocialLink>
    
    <SocialLink 
    href="https://linkedin.com/in/ijeoma-emeruwa" 
    target="_blank"  rel="noopener noreferrer">
    <SiLinkedin />
    </SocialLink>
    
    <SocialLink 
    href="https://twitter.com/ijeomaemeruwa" 
    target="_blank"  rel="noopener noreferrer">
    <FaTwitterSquare />
    </SocialLink>     
    </SocialContact>


    <MobileBtnWrap>
    <SideNavButton>
    <ResumeLink href="https://zety.com/mycv/emeruwa-ijeoma2" 
    target="_blank" 
    rel="noopener noreferrer"
    download="Ijeoma Emeruwa Resume">
        Resume 
    </ResumeLink>
    </SideNavButton>

    </MobileBtnWrap>
    </MobileMenu>
    </MenuWrapper>
    </SideBarContainer>     
    </>
)
}

export default SideBar
