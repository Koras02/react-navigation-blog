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
    FormBtn,
    FormBtnLink
 } from './SigninElement'

// sign up 클릭시 나오는 로그인 페이지 

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
                         <FormBtn>
                            <FormBtnLink to="/requiset">가입하기</FormBtnLink>
                         </FormBtn>
                         <Text>Forgot password</Text>
                     </Form>
                 </FormContent>
             </FormWrap>
         </Container>
        </>
    )
}

export default SignIn;