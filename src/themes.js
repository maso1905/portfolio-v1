import {createGlobalStyle} from 'styled-components';

export const lightMode = {
    body: 'linear-gradient(90deg, rgba(245,255,239,1) 0%, rgba(210,255,239,1) 100%)',
    nav: 'linear-gradient(90deg, rgba(245,255,239,1) 0%, rgba(210,255,239,1) 100%)',
    moz: '-moz-linear-gradient(90deg, rgba(245,255,239,1) 0%, rgba(210,255,239,1) 100%)',
    webkit: '-webkit-linear-gradient(90deg, rgba(245,255,239,1) 0%, rgba(210,255,239,1) 100%)',
    cardColor: 'rgba(0,0,0,0.04)',
    fontColor: 'rgb(16, 15, 41)',
    accentColor: '#02a686',
    scrollThumbColor: '#02a686',
    scrollThumbHover: 'rgb(16, 15, 41)'
}

export const darkMode = {
    body: '#131537',
    nav: '#131537',
    darkerBG: 'rgb(16, 15, 41)',
    cardColor: 'rgb(16, 15, 41)',
    cardBorderColor: 'transparent',
    fontColor: '#a8b8cf',
    accentColor: '#F9FF56',
    scrollThumbColor: '#a8b8cf',
    scrollThumbHover: '#F9FF56'
};

export const GlobalStyle = createGlobalStyle`  
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    body{
        background: ${(props) => props.theme.moz};
        background: ${(props) => props.theme.webkit};
        background: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
        line-height: 1.5;
        scroll-behavior: smooth;
        font-family: 'Lato', sans-serif;
        cursor: auto;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        font-family: 'Open Sans', sans-serif;    
    }
    
    h1{ font-size: 64px;}
    h2{ font-size: 32px;}
    h3{ font-size: 20px;}
    h4{ font-size: 16px;}
    h5{ font-size: 14px;}
    h6{ font-size: 12px;}
    p, 
    a{ font-size: 17px;}
    a{ color: ${(props) => props.theme.fontColor}; }
    a:hover{ color: ${(props) => props.theme.accentColor}; }
    span{ color: ${(props) => props.theme.accentColor}; }

    /* Tabs styling props */
    .react-tabs{ border-color: ${(props) => props.theme.accentColor} !important; }
    .react-tabs__tab--selected{ border-bottom-color: ${(props) => props.theme.accentColor} !important; }

    /* Mobile */
    @media screen and (max-width: 375px) and (min-width: 320px){
        h1{ font-size: 30px;}
        h2{ 
            font-size: 26px;
        }
        p, 
        a{ font-size: 15px;}
    }
    /* Tablet */
    @media screen and (max-width: 768px) and (min-width: 376px){
        h1{ font-size: 36px;}
        h2{ font-size: 30px; }
        p, 
        a{ font-size: 16px;}
    }
    /* Y-Scrollbar */
    body::-webkit-scrollbar {
        width: 6px;
    }
    body::-webkit-scrollbar-track {
        border-radius: 4px;
        background: ${(props) => props.theme.body};
    }
    body::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.scrollThumbColor};
        border-radius: 6px;
    }
    body::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.scrollThumbHover};
    }
`;