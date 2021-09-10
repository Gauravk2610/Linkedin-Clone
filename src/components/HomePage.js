import React from 'react'
import styled from 'styled-components'
import Feed from './Feed'
import News from './News'
import Profile from './Profile'

function HomePage() {
    return (
        <Container>
            <Home>
                <Profile />
                <Feed />
                <News />
            </Home>
        </Container>
    )
}

export default HomePage


const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Home = styled.div`
    max-width: 1128px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: minmax(0,5.2fr) minmax(0,12fr) minmax(300px,7fr);
    // grid-template-columns: 20% 50% 30%;
    grid-column-gap: 2.0rem;

    @media screen and (max-width: 1183px) {
        max-width: 950px;
        grid-template-columns: minmax(0,5.2fr) minmax(0,12fr) minmax(300px,7fr);

    }

    @media screen and (max-width: 992px) {
        grid-template-areas: "sidebar main aside";
        max-width: 750px;
        grid-template-columns: minmax(0,7fr) minmax(0,17fr) ;

    }
    
    @media screen and (max-width: 768px) {
        max-width: 750px;
        grid-template-areas:
            "sidebar main"
            ". aside";
        grid-template-columns: minmax(0,7fr) minmax(0,17fr);
    }
    
    
    @media screen and (max-width: 750px) {
        max-width: 620px;
        grid-template-areas:
            "sidebar main"
            ". aside";
        grid-template-columns: minmax(0,0fr) minmax(0,17fr);
        grid-column-gap: 0rem;
    }
    @media screen and (max-width: 450px) {
        max-width: 620px;
        grid-template-areas:
            "sidebar main"
            ". aside";
        grid-template-columns: minmax(0,0fr) minmax(0,17fr);
        grid-column-gap: 0rem;
    }


`