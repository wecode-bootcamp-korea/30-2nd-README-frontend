import { createGlobalStyle } from 'styled-components';
import NotoSansKRBlack from './NotoSansKR-Black.woff';
import NotoSansKRBold from './NotoSansKR-Bold.woff';
import NotoSansKRLight from './NotoSansKR-Light.woff';
import NotoSansKRMedium from './NotoSansKR-Medium.woff';
import NotoSansKRRegular from './NotoSansKR-Regular.woff';
import NotoSansKRThin from './NotoSansKR-Thin.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Noto Sans KR Black';
        src: url(${NotoSansKRBlack}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Bold';
        src: url(${NotoSansKRBold}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Light';
        src: url(${NotoSansKRLight}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Medium';
        src: url(${NotoSansKRMedium}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Regular';
        src: url(${NotoSansKRRegular}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Thin';
        src: url(${NotoSansKRThin}) format('woff');
    }
`;
