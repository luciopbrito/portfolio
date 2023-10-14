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

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem
    }

    @media ${device.mobileS} {
        body {
            font-size: 3.0rem
        }
    }

    @media ${device.laptop} {
        body {
            font-size: 1.6rem;
        }
    }

    .icon_link {
        color: #90E0EF;

        &:hover {
            color: #00B4D8;
        }
    }    
`;
