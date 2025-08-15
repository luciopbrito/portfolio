import { createGlobalStyle } from "styled-components";
import { device } from "./devices";
import { Colors } from "./colors";

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
        scroll-behavior: smooth;
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
        color: ${Colors.LightCyan};

        &:hover {
            color: ${Colors.Cyan};
        }
    }    

    p {
        font-family: 'Roboto Slab', serif;
        font-style: normal;
        font-weight: 400;
        text-align: justify;
    }

    .rs-toggle-presentation {
        background: ${Colors.LightBlue} !important;
        background-color: ${Colors.LightBlue} !important;
    }
`;
