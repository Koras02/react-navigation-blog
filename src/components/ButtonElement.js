import styled from 'styled-components'
import {Link} from 'react-scroll'

// 버튼을 통합적으로 관리하는데 이곳에서 배경색과 효과들을 부여한다.

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#01BF71' :  '#010606')
};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) =>  (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
trasition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
    (primary ? '#fff' : '#01BF71')};
}
`;