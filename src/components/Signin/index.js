import React, { useRef, useState } from 'react'
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
    FormBtnLink,
    Alert
 } from './SigninElement';
 import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';
// import {Alert} from 'react-bootstrap';

 

// sign up 클릭시 나오는 로그인 페이지 

const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();


    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // const user = firebase.auth().currentUser || {};


    const history = useHistory();
    
    async function handleSubmit(e) {
        e.preventDefault();


        try {
          setError('');
          setLoading(false);

          await login(emailRef.current.value, passwordRef.current.value);

          history.push("/");


        } catch {

            setError("비밀번호가 틀렸습니다.");
        }

        setLoading(false);
    }

    return (
        <>
         <Container>
             <FormWrap>
                 <Icon to="/">dolla</Icon>
                 <FormContent>
                     <Form action="#" onSubmit={handleSubmit}>
                         <FormH1>로그인</FormH1>
                         {error && 
                         <Alert variant="danger">
                             {error}
                         </Alert>}
                         <br/>
                         <FormLabel htmlFor='for'>아이디</FormLabel>
                         <FormInput type='email' ref={emailRef} required value="test@test.com"/>
                         <FormLabel htmlFor='for'>비밀번호</FormLabel>
                         <FormInput type='password' ref={passwordRef} required value="test123"/>
                         <FormButton type='submit' >로그인</FormButton>
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