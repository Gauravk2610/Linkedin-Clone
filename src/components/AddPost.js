import { Avatar } from '@material-ui/core'
import { LineStyle, PhotoSizeSelectActual, YouTube, Event } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function AddPost() {
    return (
        <Container>
            <Main>
                <UserPost>
                    <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1636588800&v=beta&t=IduC4IeLwJ1v6o4bTpxfRxJPCJadeJ0-V4pi5WWcNUI' />
                    <StartPost type='button'><p>Start a post</p></StartPost>
                </UserPost>
                <OtherButtons>
                    <IconBox>
                        <PhotoSizeSelectActual className='photo' />
                        <span>Photo</span>
                    </IconBox>
                    <IconBox>
                        <YouTube className='video' />
                        <span>Video</span>
                    </IconBox>
                    <IconBox>
                        <Event className='event' />
                        <span>Event</span>
                    </IconBox>
                    <IconBox>
                        <LineStyle className='article' />
                        <span>Write article</span>
                    </IconBox>
                </OtherButtons>
            </Main>
        </Container>
    )
}

export default AddPost

const Container = styled.div`
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 6px;
`

const Main = styled.div`
    margin: 10px 16px;
`

const UserPost = styled.div`
    display: flex;
    .MuiAvatar-root {
        width: 50px;
        height: 50px;
    }
`

const StartPost = styled.button`
    flex: 1;
    margin-left: 10px;
    border-radius: 40px;
    border: 1px solid lightgrey;
    background-color: inherit;
    cursor: pointer;
    p {
        color: #00000099;
        text-align: left;
        margin-left: 12px;
        font-weight: 600;
        letter-spacing: 0.2px;
    }
`

const OtherButtons = styled.div`
    display: flex;
    justify-content: space-between;
`

const IconBox = styled.div`
    display: flex;
    margin: 3px 0px;
    cursor: pointer;
    margin-bottom: 0;
    border-radius: 6px;
    justify-content: space-between;
    padding: 8px 12px;
    transition: background-color 200ms;
    align-items: center;
    :hover {
        background-color: #e1e1e1;
    }
    .MuiSvgIcon-root {
        font-size: 24px;
    }

    .photo {
        color: #55aae6;
    }
    .video {
        color: #69c069;
    }
    .event {
        color: #ea9700;
    }
    .article {
        color: #f8889b;
    }
    span {
        margin-left: 6px;
        color: #00000099;
        font-weight: 500;
    }
    @media(max-width: 488px) {
        span {
            font-size: 0.75rem;
        }
    }
    @media(max-width: 400px) {
        span {
            font-size: 0.55rem;
            display: none;
        }
    }
`