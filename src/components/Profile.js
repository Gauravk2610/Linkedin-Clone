import { Avatar } from '@material-ui/core'
import { Bookmark } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const UserCount = ({ question, count }) => (
    <UserView>
        <View>
            <p>{question}</p>
            <p className="count">{count}</p>
        </View>
    </UserView>
)

function Profile() {
    return (
        <Wrap>
            <Container>
                <UserProfile>
                    <UserBackground>
                    <ProfileImg>
                        <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1636588800&v=beta&t=IduC4IeLwJ1v6o4bTpxfRxJPCJadeJ0-V4pi5WWcNUI'/>
                    </ProfileImg>
                    </UserBackground>
                    <UserDetail>
                        <UserName>Gaurav Konde</UserName>
                    </UserDetail>
                    <UserBio>
                        <Bio>Summer Intern at e-Yantra, IIT Bombay | Freelancer | Backend Developer | ReactJS | Web Automation</Bio>
                    </UserBio>
                </UserProfile>
                <ScreenDivision><hr /></ScreenDivision>
                <ViewCountSection>
                    <UserCount question='Who viewed your profile' count={30} />
                    <UserCount question='Views of your post' count={95} />
                </ViewCountSection>
                <ScreenDivision><hr /></ScreenDivision>
                <Exclusive>
                    <Text>Access exclusive tools & insights</Text>
                    <HighlightText className='highlight'>Try Premium for free</HighlightText>
                </Exclusive>
                <hr />
                <Myitems>
                    <Bookmark />
                    <p>My items</p>
                </Myitems>
            </Container>
        </Wrap>
    )
}

export default Profile

const Wrap = styled.div`

`

const Container = styled.div`
    background-color: white;
    border-radius: 6px;
    height: fit-content;    
    position: fixed;
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 228px;
    width: 100%;
    min-width: 10px;

    display: flex;

    @media(max-width: 1183px) {
        max-width: 180px;
    }
    @media screen and (max-width: 992px) {
        max-width: 208px;
    }
    @media screen and (max-width: 750px) {
        display: none;
    }
`

const UserProfile = styled.div`
    border-radius: 40px;

`

const UserBackground = styled.div`
    height: 50px;
    position: relative;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-image: url('https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq');
    background-size: cover;
`

const ProfileImg = styled.div`
    position: absolute;
    top: 42%;
    right: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    .MuiAvatar-root {
        width: 62px;
        height: 62px;
    }
`

const UserDetail = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`

const UserName = styled.h4`
    margin-top: 20px;
    text-align: center;
    color: #000000e6;
    font-weight: 600;
`

const UserBio = styled.div`
    margin-top: 6px;
    display: flex;
    justify-content: center;
`

const Bio = styled.p`
    width: 80%;
    font-size: 12px;
    text-align: center;
    color: #00000099;
`

const ScreenDivision = styled.div`
    margin: 16px 0;
    margin-bottom: 0px;
    hr {
        color: #00000099;
    }
`

const ViewCountSection = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`

const UserView = styled.div`
    display: flex;
    width: 100%;
    padding: 5px 0;
    cursor: pointer;
    :hover {
        background-color: lightgray;
    }
`

const View = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 16px;

    p {
        font-size: 12.5px;
        color: #00000099;
    }

    .count {
        color: blue;
        font-weight: 500;
    }
`

const Exclusive = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    cursor: pointer;
    :hover {
        background-color: lightgray;
        
        .highlight {
            color: darkblue;
        }
    }
    
`

const Text = styled.div`
    font-size: 12.5px;
    color: #00000099;
    width: 90%;
    text-align: center;
    margin-top: 10px;
`

const HighlightText = styled.div`
    font-size: 13px;
    width: 90%;
    font-weight: 500;
    text-align: center;
`

const Myitems = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: top;
    cursor: pointer;
    .MuiSvgIcon-root {
        color: grey;
        font-size: 20px;
    }

    p {
        font-size: 13.5px;
        margin-left: 6px;
        font-weight: 500;
    }
    :hover {
        background-color: lightgray;
    }
`