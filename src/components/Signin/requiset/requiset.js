import React from 'react'
import {Container,FormWrap,Form,Icon,FormContent,FormH1,FormLabel,FormInput,FormButton} from './requisetElements';


// 회원가입 페이지
const requiset = () => {
    return (
        <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                  <FormContent>
                      <Form action="#">
                      <FormH1>로그인</FormH1>
                      <FormLabel htmlFor="for">아이디
                      </FormLabel>
                      <FormInput type="email" required/>
                      <FormLabel htmlFor="for">비밀번호</FormLabel>
                      <FormInput type='password' required/>
                      <FormButton type="submit">로그인</FormButton>
                      </Form>
                  </FormContent>
             </FormWrap> 
          </Container>
    )       
}

export default requiset;