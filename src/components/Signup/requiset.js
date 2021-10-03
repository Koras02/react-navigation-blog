/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react'
import {
    Container,
    FormWrap,
    Form,
    Icon,
    FormContent,
    FormH1,
    FormLabel,
    FormInput,
    FormButton
} from './requisetElements';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';
import { Alert } from '../Signin/SigninElement';


// 회원가입 페이지
const requiset = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { signup } = useAuth();
    
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("비밀번호가 동일하지 않습니다.");
        }

        try {
            setError("")
            setLoading(true)

            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/react-navigation-blog');


        } catch {
            setError("비밀번호가 맞지않아 회원가입이 불가능 합니다.")
        }
    }

    return (
        <Container>
                <FormWrap>
                    <Icon to="/react-navigation-blog">dolla</Icon>
                  <FormContent>
                      <Form action="#" onSubmit={handleSubmit}>
                      <FormH1>회원가입</FormH1>
                      {error && 
                        <Alert variant="danger">
                            {error}
                        </Alert>
                      }
                      <br />
                      <FormLabel htmlFor="for">아이디</FormLabel>
                      <FormInput type="email" ref={emailRef} required/>
                      <FormLabel htmlFor="for">비밀번호</FormLabel>
                      <FormInput type='password' ref={passwordRef} required />
                      <FormLabel htmlFor="for">비밀번호 재확인</FormLabel>
                      <FormInput type="password" ref={passwordConfirmRef}></FormInput>
                      <FormButton disabled={loading} type="submit">회원가입</FormButton>
                      </Form>
                  </FormContent>
             </FormWrap> 
          </Container>
    )       
}

export default requiset;