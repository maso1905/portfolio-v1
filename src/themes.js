import {createGlobalStyle} from 'styled-components';

export const lightMode = {
    body: '#a8b8cf',
    darkerBG: 'rgb(16, 15, 41)',
    fontColor: 'rgb(16, 15, 41)',
    accentColor: '#131537'
}

export const darkMode = {
    body: '#131537',
    darkerBG: 'rgb(16, 15, 41)',
    fontColor: '#a8b8cf',
    accentColor: '#F9FF56'
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
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.4;
        overflow-x: hidden;
    }

    h1{ font-size: 50px;}
    h2{ font-size: 32px;}
    h3{ font-size: 20px;}
    h4{ font-size: 16px;}
    h5{ font-size: 14px;}
    h6{ font-size: 12px;}
    p, 
    a{ font-size: 16px;}
    a{ color: ${(props) => props.theme.fontColor}; }
    a:hover{ color: ${(props) => props.theme.accentColor}; }
    span{ color: ${(props) => props.theme.accentColor}; }
    p{ padding-top: 2%; }

    /* Mobile */
    @media screen and (max-width: 375px) and (min-width: 320px){
        h1{ font-size: 30px;}
        h2{ 
            font-size: 26px;
            margin-top: 5%;
        }
        p{ margin-top: 5%;}
        p, 
        a{ font-size: 14px;}
    }
    /* Tablet */
    @media screen and (max-width: 768px) and (min-width: 376px){
        h1{ font-size: 36px;}
        h2{ 
            font-size: 24px;
            margin-top: 2%;
        }
        p, 
        a{ font-size: 16px;}
    }

    /* Y-Scrollbar */
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.fontColor};
        border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.accentColor};
    }
`;