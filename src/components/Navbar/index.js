import React, {useState,useEffect} from 'react';  // 적용할 효과와 / 랜더링될때마다 특정작업를 할수있는 기능인 useEffect를 임포트한다.
import {FaBars} from 'react-icons/fa';  // 메뉴바등 여러가지 아이콘을 기능하는 Fabars를 임포트 한다.
import {IconContext} from 'react-icons/lib'; //리액트 아이콘을 불러온다.
import {animateScroll as scroll } from 'react-scroll'; //scroll 시 적용할수있는 애니메이션을 import한다.
import {Nav,NavbarContainer, NavLogoLink, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink}  from './NavbarElements'; //본문에서 선언한 문장들을 css한것을 import한다.

//const = 상수 const class의 맴버 함수에만 사용할수있다.
//const Navbar = {{ toggle }}  toggle 
 
const Navbar = ({ toggle }) => {    
  const [scrollNav, setScrollNav] = useState(true);

      const changeNav = ()=> {   //changeNav라는 변수를 만든다.
        if(window.scrollY > 100) {    // scroll x 가로 y세로로  밑으로 스크롤 했을때 투명도 if문으로 생성 
          setScrollNav(false) // Y가 100보다 크거나 작을때 false를 실행 
        } else {   // else로 true문을 생성한다.
          setScrollNav(true) //true를 실행 
        }
      };
s
      useEffect(() => {   //사용할 효과 설정 
        window.addEventListener('scroll', changeNav);  // window event Listerne 
      }, []);

    const toggleHome = () => {
      scroll.scrollToTop();
    }
      
      //retrun은 화면의 문장를 출력해주는 역할을 한다.s
    return (
      <>   
         <IconContext.Provider value={{ color: 'red'}}>  {/* IconContext라는 함수를 공급해준다. */}
        <Nav scrollNav={scrollNav}>    
           <NavbarContainer>   
               <NavLogoLink to="/" onClick={toggleHome}>  {/* 클릭했을때 맨위로 홈으로 갈수있게 togglehome을 설정한다. */}
                   JungoHo
               </NavLogoLink>  
            <MobileIcon onClick={toggle}>  {/* 클릭했을때 설정한 toggle 값으로 이동하는 함수를 추가한다. */}
               <FaBars /> 
            </MobileIcon>
            <NavMenu>
              <NavItem>
                {/*  NavLinks라는 함수를 생성해서 각각의 링크를 부여하고 스타일을 정한다. */}
                  <NavLinks to="about"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}  /// 링크를 생성하고 부드러운 모션을 선언한다
                  >About</NavLinks>   
              </NavItem>
              <NavItem>
                  <NavLinks to="discover" 
                /* 입력순서대로 /클릭하면 넘어갈때 부드러운효과 smooth/  / 지속시간 duration /  / 함수호출log spy함수 /  /중복출력 방지/  /위치 설정/ */
                   smooth={true} duration={900}  spy={true} exact='true' offset={-80}>Discover</NavLinks>  
              </NavItem>
                <NavItem>
                  <NavLinks to="services"
                   smooth={true} duration={2000} spy={true} exact='true' offset={-80}>Services</NavLinks>
              </NavItem>
                <NavItem>
                  <NavLinks to="footer"
                   smooth={true} duration={500} spy={true} exact='true' offset={200}>Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
               <NavBtnLink to="/sign">로그인</NavBtnLink> 
            </NavBtn>
           </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    );
};

export default Navbar;