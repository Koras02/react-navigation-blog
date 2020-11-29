import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook,FaInstagram,FaYoutube,FaLinkedinIn} from 'react-icons/fa';
import {FooterContainer,FooterWrap,FooterLinkContainer,FooterLinkWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,
    SocialIcons,SocialIconLink} from './FooterElements';

   

 
    const Footer = () => {
       const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer> 
            <FooterWrap>
            <FooterLinkContainer>
             <FooterLinkWrapper>
                 <FooterLinkItems>
                     <FooterLinkTitle>프로필  소개</FooterLinkTitle>
                 <FooterLink to ="/signin"></FooterLink>
                 <FooterLink to ="/signin">회사 경력</FooterLink>
                 <FooterLink to ="/signin">블로그 소개</FooterLink>
                 <FooterLink to ="/signin">거주 지역</FooterLink>
                 <FooterLink to ="/signin">웹개발언어</FooterLink>
                 </FooterLinkItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                 <FooterLinkItems>
                     <FooterLinkTitle>Contact KR</FooterLinkTitle>
                 <FooterLink to ="/signin">웹 개발 강의</FooterLink>
                 <FooterLink to ="/signin">웹 튜토리얼</FooterLink>
                 <FooterLink to ="/signin">협업단체</FooterLink>
                 <FooterLink to ="/signin">서비스 소개</FooterLink>
                 </FooterLinkItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                 <FooterLinkItems>
                 <FooterLinkTitle>About Us</FooterLinkTitle>
                 <FooterLink to ="/signin">About us</FooterLink>
                 <FooterLink to ="/signin">How it works</FooterLink>
                 <FooterLink to ="/signin">Testimonials</FooterLink>
                 <FooterLink to ="/signin">Investors</FooterLink>
                 <FooterLink to ="/signin">Terms of Service</FooterLink>
                 </FooterLinkItems>
                </FooterLinkWrapper>  
                <FooterLinkWrapper>
                 <FooterLinkItems>
                 <FooterLinkTitle>About Us</FooterLinkTitle>
                 <FooterLink to ="/signin">About us</FooterLink>
                 <FooterLink to ="/signin">How it works</FooterLink>
                 <FooterLink to ="/signin">Testimonials</FooterLink>
                 <FooterLink to ="/signin">Investors</FooterLink>
                 <FooterLink to ="/signin">Terms of Service</FooterLink>
                 </FooterLinkItems>
                </FooterLinkWrapper> 
            </FooterLinkContainer>  
            <SocialMedia> 
              <SocialMediaWrap>
                  <SocialLogo to='/' onClick={toggleHome}>dolla
                  </SocialLogo>
                      <WebsiteRights>dolla @ {new Date().getFullYear()}
                      All rights reserved.</WebsiteRights>
                  <SocialIcons>
                   <SocialIconLink href="/" target="_blank" aria-label="facebook">
                   <FaFacebook />
                  </SocialIconLink>    
                   <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                   <FaInstagram />
                  </SocialIconLink>    
                   <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                   <FaYoutube/>
                  </SocialIconLink>    
                   <SocialIconLink href="/" target="_blank" aria-label="Linkdin">
                   <FaLinkedinIn/>
                  </SocialIconLink>    
                </SocialIcons>            
              </SocialMediaWrap>
              </SocialMedia>
            </FooterWrap>           
        </FooterContainer>
    );
};

export default Footer;
