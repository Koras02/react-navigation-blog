import React from 'react'
import {
    Container,
    FormWrap,
    Icon, 
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    Text,
    FormButton,
    FormBtnWrap,
   
 } from './SigninElement'

const SignIn = () => {
    return (
        <>
         <Container>
             <FormWrap>
                 <Icon to="/">dolla</Icon>
                 <FormContent>
                     <Form action="#">
                         <FormH1>로그인</FormH1>
                         <FormLabel htmlFor='for'>아이디
                         </FormLabel>
                         <FormInput type='email' required/>
                         <FormLabel htmlFor='for'>비밀번호</FormLabel>
                         <FormInput type='password' required />
                         <FormButton type='submit'>로그인</FormButton>
                         <FormBtnWrap>
                         </FormBtnWrap>
                         <Text>Forgot password</Text>
                     </Form>
                 </FormContent>
             </FormWrap>
         </Container>
        </>
    )
}

export default SignIn;