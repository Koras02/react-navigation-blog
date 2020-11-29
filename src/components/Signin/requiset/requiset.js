import React from 'react'
import {Container,FormContent,FormH1,FormLabel,FormInput,FormBtn,FormButton} from './requisetElements';


// 회원가입 페이지
const requiset = () => {
    return (
        <Container>
                <FormContent>
                        <FormH1>회원가입</FormH1>
                        <FormLabel htmlFor="for">아이디</FormLabel>
                        <FormInput type="id" required/>
                        <FormLabel htmlFor="for">비밀번호</FormLabel>
                        <FormInput type="password" required/>
                        <FormLabel htmlFor="for">이메일 주소</FormLabel>
                        <FormInput type="emali" required/>
                        <FormLabel htmlFor="for">생년월일</FormLabel>
                        <FormBtn>
                             
                        </FormBtn>

                </FormContent>
        </Container>
    )
}

export default requiset;