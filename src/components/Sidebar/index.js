import React,{useState,useEffect} from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarMenu, SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements';
import * as scroll  from 'react-scroll'; //모든 스크롤 기능 import 
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

const Sidebar = ({ isOpen, toggle }) => {
    const [ScrollTop,ScrollBottom] = useState(true);
     
      const changeUp = () => {
          if(window.setscrollY <= 100) {
              ScrollTop(true);
          } else{
              ScrollBottom(false);
          }
      };
       
       useEffect(() => {
           window.addEventListener('Scroll', changeUp);
       }, []);
       
       const toggleHome = () => {
           scroll.ScrollTop();
       }
       
    return (
        // isOpen은 상태를 확인하는 문법이고 Onclick클릭했을때 이벤트를 선언하는 함수이다 
        <SidebarContainer isOpen={isOpen} onClick={toggle}>   
            <Icon onClick={toggleHome}> 
           {/*  </>은 클로징태그를 생략하고 그안에 한번에 입력하는 함수이다. */}
             <CloseIcon />
            </Icon>
        {/* react에서는 문법이정해지지않고 본인이 id값을 태그로 줄수있다.그태그안에서 elemet에서 css를 구현할수있다. */}
    <SidebarWrapper scrollSide={scrollToTop}>
        <SidebarMenu>
            <SidebarLink to='about' onClick={toggle}>About</SidebarLink>  
            <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
            <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
            <SidebarLink to='/hellow' onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/helow" onClick={toggle}>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
    );
};

export default Sidebar;