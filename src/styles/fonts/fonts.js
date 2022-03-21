import { createGlobalStyle } from 'styled-components';
import NanumGothicBold from './NanumGothic-Bold.ttf';
import NanumGothicExtraBold from './NanumGothic-ExtraBold.ttf';
import NanumGothicRegular from './NanumGothic-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Nanum GothicBold';
        src: url(${NanumGothicBold}) format('truetype');
    }
    @font-face {
        font-family: 'Nanum Gothic ExtraBold';
        src: url(${NanumGothicExtraBold}) format('truetype');
    }
    @font-face {
        font-family: 'Nanum Gothic Regular';
        src: url(${NanumGothicRegular}) format('truetype');
    }
`;
