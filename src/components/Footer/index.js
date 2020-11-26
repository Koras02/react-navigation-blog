import React from 'react'
import {FooterContainer,FooterWrap,FooterLinkItems,FooterLinkContainer,FooterLinkTitle,FooterLinkWrapper,FooterLink} from './FooterElements';

export const Footer = () => {
    return (
        <FooterContainer> 
            <FooterWrap>
            <FooterLinkContainer>
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
                     <FooterLinkTitle>Contact US</FooterLinkTitle>
                 <FooterLink to ="/signin">Contact</FooterLink>
                 <FooterLink to ="/signin">Support</FooterLink>
                 <FooterLink to ="/signin">Destinations</FooterLink>
                 <FooterLink to ="/signin">Sponsorships</FooterLink>
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
            </FooterWrap>           
        </FooterContainer>
    );
};

export default Footer;
