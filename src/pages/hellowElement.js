import styled from 'styled-components';

export const HelloContainer = styled.div`
   width:100%;
   height:1200px;
   border: 2px solid #000;
   background:#000;
`;


export const HeroH1 = styled.div`
   width:50%;
   height:1200px;
   background:#000;
   float:left;
   

   &:hover{
      opacity:0.6;
      background:yellow;
      transition:0.5s;
   }
`; 

export const HeroP = styled.div`
  width:50%;
  height:1200px;
  float:right;
  &:hover{
     opacity:0.6;
     background:powderblue;
     transition:0.4s;
  }
`