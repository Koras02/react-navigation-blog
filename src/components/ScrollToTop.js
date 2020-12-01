import {useEffect} from 'react';
import {useLocation} from 'react-router-dom'


// Top 위로올라갔을때의 모션을 지정하는 js

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(
      () => {
          window.scrollToTop(100, 10);
      },
      [pathname]
    );

    return null;
}