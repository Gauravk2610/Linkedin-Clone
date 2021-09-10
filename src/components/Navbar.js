import { Avatar } from '@material-ui/core'
import { ChatBubble, Group, HomeRounded, LinkedIn, Search, Work, Notifications, Apps, MoreHoriz } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <NavContainer>    
            <Container>
                <Main>
                    <SubContainer>
                        <LeftContainer>
                            <LinkedIn />
                            <SearchBar>
                                <Search />
                                <input type="text" placeholder='Search'/>
                            </SearchBar>
                        </LeftContainer>
                        <Right>

                        <MiddleContainer>
                            <NameBox  active={true}>
                                <Box active={true}>
                                    <HomeRounded />
                                    <span>Home</span>
                                </Box>
                            </NameBox>
                            <NameBox>
                                <Box>
                                    <Group />
                                    <span>My Network</span>
                                </Box>
                            </NameBox>
                            <NameBox className='job'>
                                <Box>
                                    <Work />
                                    <span>Jobs</span>
                                </Box>
                            </NameBox>
                            <NameBox className='msg'>
                                <Box>
                                    <ChatBubble />
                                    <span>Messaging</span>
                                </Box>
                            </NameBox>
                            <NameBox>
                                <Box>
                                    <Notifications />
                                    <span>Notifications</span>
                                </Box>
                            </NameBox>
                            <NameBox>
                                <Box>
                                    <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1636588800&v=beta&t=IduC4IeLwJ1v6o4bTpxfRxJPCJadeJ0-V4pi5WWcNUI' />
                                    <span>Me</span>
                                </Box>
                            </NameBox>
                            <NameBox className='dotIcon'>
                                <Box >
                                    <MoreHoriz />
                                </Box>
                            </NameBox>
                        </MiddleContainer>
                        <RightContainer>
                            <NameBox>
                                <Box>
                                    <Apps />
                                    <span>Work</span>
                                </Box>
                            </NameBox>   
                            <HighlitedText href='#'>Try Premium For Free</HighlitedText>                             
                        </RightContainer>
                        </Right>
                    </SubContainer>
                </Main>

            </Container>
        </NavContainer>
    )
}

export default Navbar

const NavContainer = styled.div`
    height: 52px;
` 

const Container = styled.div`
    height: 52px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white; 
    display: flex;
    z-index: 1;
    flex: 1;
    align-items: center;
    justify-content: center;

`

const Main = styled.div`
    position: fixed;  
    max-width: 1128px;
    width: 100%;
    display: flex;
    flex: 1;
    height: inherit;
    `
    
const SubContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    @media(max-width: 1000px) {
        justify-content: flex-start;
    }
`

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 6px 0;

    .MuiSvgIcon-root {
        color: #0a66c2;
        font-size: 44px;
    }
`

const SearchBar = styled.div`
    background-color: #eef3f8;
    display: flex;
    align-items: center;
    margin-left: 6px;
    padding: 6px;
    border-radius: 3px;
    .MuiSvgIcon-root {
        color: #626467;
        font-size: 24px;
        margin: 0 6px;
    }

    input {
        outline-width: 0;
        border: none;
        background-color: inherit;
        flex: 0.95;
        width: 100%;
        font-size: 15px;
        font-weight: 100;
    }

    @media(max-width: 1000px) {
        input {
            display: none;
        }
    }
`

const Right = styled.div`
    display: flex;
`

const MiddleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    border-right: 1px solid lightgrey;
    @media(max-width: 1000px) {
        justify-content: center;
    }
    @media(max-width: 650px) {
        margin-right: auto;
        margin-left: 0;
    }
    @media(max-width: 550px) {
        border-right: none;
    }
    .dotIcon {
        display: none;
    }
    @media(max-width: 550px) {
        .dotIcon {
            display: flex;
        }
    }
    @media(max-width: 550px) {
        margin-right: auto;
        margin-left: 0;
    }

    @media(max-width: 420px) {
    .dotIcon {
        display: none !important;;
    }
    
    @media(max-width: 360px) {
        .msg {
            display: none;
        }
    }
    
    @media(max-width: 320px) {
        .job {
            display: none;
        }
    }


}
`

const NameBox = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    // padding: 0 18px;
    // width: 0px;
    // width: 100%;
    // max-width: 80px;
    width: 80px;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border-bottom: ${props => props.active ?('2.3px solid'): ('')};
    

    @media(max-width: 850px) {
        border-bottom: 0px;

    }
    @media(max-width: 650px) {
        width: 46px;
    }

`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .MuiSvgIcon-root {
        color: ${props => props.active ? ('black'):('#666666')} ;
        font-size: 28px;
    }
    .MuiAvatar-root {
        width: 28px;
        height: 28px;
    }

    span {
        font-size: 12px;
        color: #666666;
    }

    :hover {
        .MuiSvgIcon-root, span {
            color: black;
        }
    }

    
    @media(max-width: 850px) {
        span {
            display: none;
        }   
    }

    @media(max-width: 500px) {
        .MuiAvatar-root {
            width: 26px;
            height: 26px;
        }

        .MuiSvgIcon-root {
            font-size: 26px;
        }
    }
`

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    .MuiSvgIcon-root {
        color: #666666;
        font-size: 28px;
    }
    @media(max-width: 550px) {
        display: none;
    }
`

const HighlitedText = styled.a`
    width: 60%;
    color: #c28e22;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
`