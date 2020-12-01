import styled from 'styled-components';
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
   width:100%;
   background: #0c0c0c;
   display: flex;
   justify-content: cneter;
   align-items:center;
   padding: 0 34%;
   height:800px;
   position: relative;
   z-index: 1;

   :before{
     content: '';
     position: absolute;
     top:0;
     left:0;
     right:0;
     bottom:0;
     background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%), rgba(0,0,0,0.6) 100%),
     linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
     z-index: 2;
   }
   `;

   /* Add :before styles */
export const HeroBg = styled.div`
  border:2px solid red;
  position: absolute;
  display:gird;
  top:0;
  right:0;
  bottom:0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video `
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
   display:grid;
   z-index:1;
   max-width:1900px;
   position: absolute;
   display: flex;
   flex-direction: column;
   algin-items: center; 
`

export const HeroH1 = styled.h1`
 color:green;
 font-size: 48px;
 text-align:center;
 
 @media screen and (max-width: 1024px){
   width:100%;
   font:bold 40px/24px arial;
   margin-left:1%;
   color:#000;
 }

 @media screen and (max-width: 768px){
   width:100%;
   color:yellowgreen;
   font:bold 45px/50px arial;
   margin-left:-20%;
 }

 @media screen and (max-width: 480px){
   font-size:30px;
   margin-left:-50px;
 }
`

export const HeroP = styled.p`
  margin-top:24px;
  color:#fff;
  font-size:24px;
  text-align:center;
  max-width:600px;
 
  @media screen and (max-width: 768px){
    font-size:24px;
    margin-left:-25%;
  }

  @media screen and (max-width: 480px){
    font-size:18px;
    margin-left:-50px;
  }
  `


  export const HeroBtnWrapper = styled.div`
   margin-top:32px;
   display:flex;
   flex-direction: column;
   align-items:center;
   
   @media screen and (max-width: 768px){
     font-size:18px;
     margin-left:-260%;
   }
   `

  export const ArrowForward = styled(MdArrowForward)`
   margin-left: 10px;
   font-size: 20px;
  `

  export const ArrowRight = styled(MdKeyboardArrowRight)`
   margin-left: 8px;
   font-size: 20px;
  `