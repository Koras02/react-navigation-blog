import styled from 'styled-components';
 
export const Container = styled.div`
   min-height:692px;
   position:fixed;
   bottom:0;
   left:0;
   right:0;
   top:0;
   z-index:0;
   overflow:hidden;
   background: linear-gradient(
     180deg,
     rgba(1, 147, 86, 1) 0%,
     rgba(10,201,122,1) 100%
   );
`;

export const FormContent = styled.div`
   height:100%;
   display:flex;
   flex-direction:column;
   justify-content:center;
   
   @media screen and (max-width: 400px){
     height:80%;
   }
   `;


export const FormH1 = styled.h1`
   margin-bottm:8px;
`

export const FormLabel = styled.div`
   color:red;
`

export const FormInput = styled.div`
  border:1px solid red;
`

export const FormBtn = styled.div`
   width:100%;
   border:1px solid #000;
   font:bold 16px/24px arial;
   color:red;
`;

export const FormButton = styled.div`
  width:100px;height:50px;
  border:1px solid green;
`;

