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
        font-size: 14px;
        color: ${(props) => props.theme.accentColor};
        animation: section-slide-up .6s forwards 1.2s ease-in-out;
    }
    h1{
        opacity: 0;
        animation: section-slide-up .6s forwards 2.2s ease-in-out;
    }
    h2{
        opacity: 0;
        animation: section-slide-up .6s forwards 3.2s ease-in-out;
    }
    p{
        opacity: 0;
        max-width: 700px;
        margin-top: 5%;
        margin-bottom: 3%;
        animation: section-slide-up .6s forwards 4.2s ease-in-out;
        @media screen and (max-width: 768px){
            padding-top: 0;
            max-width: 200px;
        }
    }
    @keyframes section-slide-up{
        from{
            transform: translateY(20%);
            opacity: 0;
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }

    .devAnim{
        display: inline-block;
        transform-origin: bottom left;
        animation: developer-break 1s forwards 5.2s ease-in-out, developer-fall .4s forwards 6.2s ease-in-out, developer-reemerge .6s forwards 8s ease-in-out;
    }
    @keyframes developer-break{
        0% { transform: rotate(0deg) }
        25% { transform: rotate(95deg) }  
        50% { transform: rotate(65deg) }
        75% { transform: rotate(90deg) }
        100% { transform: rotate(75deg) }
    }
    @keyframes developer-fall{
        from { 
        transform: rotate(75deg) translateY(0); 
        opacity: 1;
        }  
        to { 
        transform: translateY(50vh); 
        opacity: 0;
        }
    }
    @keyframes developer-reemerge{
        from { 
        transform: translateY(20%); 
        }  
        to { 
        transform: translateY(0); 
        opacity: 1;
        }
    }
    
`