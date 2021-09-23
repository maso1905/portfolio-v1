import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 1100px;
    @media screen and (max-width: 768px){
        padding: 5%;  
    }
    .small-welcome{
        opacity: 0;
        color: ${(props) => props.theme.accentColor};
        -webkit-animation: section-slide-up .6s forwards 1s ease-in-out;
        -moz-animation: section-slide-up .6s forwards 1s ease-in-out;
        -ms-animation: section-slide-up .6s forwards 1s ease-in-out;
        -o-animation: section-slide-up .6s forwards 1s ease-in-out;
        animation: section-slide-up .6s forwards 1s ease-in-out;
    }
    h1{
        opacity: 0;
        -webkit-animation: section-slide-up .6s forwards 2s ease-in-out;
        -moz-animation: section-slide-up .6s forwards 2s ease-in-out;
        -ms-animation: section-slide-up .6s forwards 2s ease-in-out;
        -o-animation: section-slide-up .6s forwards 2s ease-in-out;
        animation: section-slide-up .6s forwards 2s ease-in-out;
    }
    h2{
        opacity: 0;
        -webkit-animation: section-slide-up .6s forwards 3s ease-in-out;
        -moz-animation: section-slide-up .6s forwards 3s ease-in-out;
        -ms-animation: section-slide-up .6s forwards 3s ease-in-out;
        -o-animation: section-slide-up .6s forwards 3s ease-in-out;
        animation: section-slide-up .6s forwards 3s ease-in-out;
    }
    p{
        opacity: 0;
        max-width: 900px;
        margin-top: 1%;
        -webkit-animation: section-slide-up .6s forwards 5.9s ease-in-out;
        -moz-animation: section-slide-up .6s forwards 5.9s ease-in-out;
        -ms-animation: section-slide-up .6s forwards 5.9s ease-in-out;
        -o-animation: section-slide-up .6s forwards 5.9s ease-in-out;
        animation: section-slide-up .6s forwards 5.9s ease-in-out;
        @media screen and (max-width: 768px){
            padding-top: 0;
            max-width: 300px;
        }
    }
    @keyframes section-slide-up{
        from{
            -webkit-transform: translateY(20%);
            -moz-transform: translateY(20%);
            -o-transform: translateY(20%);
            -ms-transform: translateY(20%);
            transform: translateY(20%);
            opacity: 0;
        }
        to{
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -o-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }
    }

    .devAnim{
        display: inline-block;
        transform-origin: bottom left;
        -webkit-animation: developer-break 1s forwards 4s ease-in-out, developer-fall .4s forwards 5s ease-in-out, developer-reemerge .6s forwards 8s ease-in-out;
        -moz-animation: developer-break 1s forwards 4s ease-in-out, developer-fall .4s forwards 5s ease-in-out, developer-reemerge .6s forwards 8s ease-in-out;
        -o-animation: developer-break 1s forwards 4s ease-in-out, developer-fall .4s forwards 5s ease-in-out, developer-reemerge .6s forwards 8s ease-in-out;
        -ms-animation: developer-break 1s forwards 4s ease-in-out, developer-fall .4s forwards 5s ease-in-out, developer-reemerge .6s forwards 8s ease-in-out;
        animation: developer-break 1s forwards 4s ease-in-out, developer-fall .4s forwards 5s ease-in-out, developer-reemerge .6s forwards 8s ease-in-out;
    }
    @keyframes developer-break{
        0% { 
            -webkit-transform: rotate(0deg); 
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg); 
            transform: rotate(0deg);
        }
        25% { 
            -webkit-transform: rotate(95deg); 
            -moz-transform: rotate(95deg);
            -o-transform: rotate(95deg);
            -ms-transform: rotate(95deg); 
            transform: rotate(95deg) 
        }  
        50% { 
            -webkit-transform: rotate(65deg); 
            -moz-transform: rotate(65deg);
            -o-transform: rotate(65deg);
            -ms-transform: rotate(65deg); 
            transform: rotate(65deg) 
        }
        75% { 
            -webkit-transform: rotate(90deg); 
            -moz-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg) 
        }
        100% { 
            -webkit-transform: rotate(75deg); 
            -moz-transform: rotate(75deg);
            -o-transform: rotate(75deg);
            -ms-transform: rotate(75deg);
            transform: rotate(75deg) 
        }
    }
    @keyframes developer-fall{
        from { 
            -webkit-transform: rotate(75deg) translateY(0);
            -moz-transform: rotate(75deg) translateY(0);
            -o-transform: rotate(75deg) translateY(0);
            -ms-transform: rotate(75deg) translateY(0);
            transform: rotate(75deg) translateY(0); 
            opacity: 1;
        }  
        to { 
            -webkit-transform: translateY(50vh); 
            -moz-transform: translateY(50vh); 
            -o-transform: translateY(50vh); 
            -ms-transform: translateY(50vh); 
            transform: translateY(50vh); 
            opacity: 0;
        }
    }
    @keyframes developer-reemerge{
        from { 
            -webkit-transform: translateY(20%); 
            -moz-transform: translateY(20%); 
            -o-transform: translateY(20%); 
            -ms-transform: translateY(20%); 
            transform: translateY(20%); 
        }  
        to { 
            -webkit-transform: translateY(0); 
            -moz-transform: translateY(0); 
            -o-transform: translateY(0); 
            -ms-transform: translateY(0); 
            transform: translateY(0); 
            opacity: 1;
        }
    }
    
`