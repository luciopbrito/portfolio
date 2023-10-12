import { createGlobalStyle } from "styled-components";
import { device } from "./devices";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    @media ${device.mobileS} {
        body {
            font-size: 20px;
        }
    }

    @media ${device.laptop} {
        body {
            font-size: inherit;
        }
    }

`;
