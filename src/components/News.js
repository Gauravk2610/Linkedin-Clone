import React from 'react'
import styled from 'styled-components'
import LinkedinNews from './LinkedinNews'
import TopCourses from './TopCourses'

function News() {
    return (
        <Container>
            <Wrap>
                <LinkedinNews />
                <TopCourses />
            </Wrap>
        </Container>
    )
}

export default News

const Container = styled.div`
    max-width: 300px;   
    display: flex;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 992px) {
        display: none;
    }
`

const Wrap = styled.div`
    max-width: 300px;  
    width: 100%; 
    position: fixed;
`