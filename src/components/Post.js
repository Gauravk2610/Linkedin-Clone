import { Avatar } from '@material-ui/core'
import { Favorite, Message, MoreHoriz, Reply, Telegram, ThumbUp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Post({data}) {
    return (
        <Container>
            <Main>
                <UserBar>
                    <Avatar src={data.profile} />
                    <UserDetails>
                        <h4>{data.username}</h4>
                        <p>{data.bio}</p>
                        <span>{data.time}</span>
                    </UserDetails> 
                    <MoreHoriz />
                </UserBar>
                <PostDescription>
                    {data.postDescription}
                </PostDescription>
                <PostImg src={data.img} />
                <Reaction>
                    <ThumbUp className='like' />
                    <Favorite className='love' />
                    <Count>{data.totalCount}</Count>
                    <Comment>{data.comments} comments</Comment>
                </Reaction>
                <Seperation />
                <ReactionButton>
                    <ReactUser>
                        <Favorite className='love' />
                        <p className='love'>Love</p>
                    </ReactUser>
                    <ReactUser>
                        <Message />
                        <p>Comment</p>
                    </ReactUser>
                    <ReactUser>
                        <Reply className='share' />
                        <p>Share</p>
                    </ReactUser>
                    <ReactUser>
                        <Telegram className='send' />
                        <p>Send</p>
                    </ReactUser>
                </ReactionButton>
            </Main>
        </Container>
    )
}

export default Post

const Container = styled.div`
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 6px;
    margin-bottom: 14px;
`

const Main = styled.div`
    margin: 10px 0px;

`

const UserBar = styled.div`
    margin: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .MuiAvatar-root {
        cursor: pointer;
    }

    .MuiSvgIcon-root {
        cursor: pointer;
        padding: 6px;
        border-radius: 40px;
        transition: background-color 200ms;
    }

    .MuiSvgIcon-root:hover {
        background-color: lightgrey;
    }
`

const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 10px;
    h4 {
        cursor: pointer;
        color: rgb(0, 0, 0, 0.7);
        font-size: 15px;
    }
    p {
        cursor: pointer;
        color: #00000099;
        font-size: 12px;
        font-weight: 500;
    }
    span {
        color: #00000099;
        font-size: 11px;
        font-weight: 400;
    }
`

const PostDescription = styled.p`
    margin: 10px 16px;
    display: flex;
    font-size: 0.85em;
    color: rgb(0, 0, 0, 0.85)
`

const PostImg = styled.img`
    width: 100%;
    max-height: 450px;
    object-fit: contain;
`

const Reaction = styled.div`
    display: flex;
    margin: 6px 16px;
    align-items: center;
    .MuiSvgIcon-root {
        padding: 3px;
        border-radius: 40px;
        font-size: 12px;
        margin: 0 4px;
    }

    .like {
        background-color: darkblue;
        color: lightblue;
        transform: scaleX(-1);
    }

    .love {
        color: #cd4055;
        background-color: pink;
    }

`

const Count = styled.div`
    margin-left: 6px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    :hover {
        color: blue;
        text-decoration: underline;
    }
`

const Comment = styled.div`
    margin-left: 6px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    :hover {
        color: blue;
        text-decoration: underline;
    }
`

const Seperation = styled.div`
    height: 0.1px;
    margin: 10px 16px;
    background-color: rgb(0, 0, 0, 0.2);
`

const ReactionButton = styled.div`
    display: flex;
    margin: 0px 16px;

`

const ReactUser = styled.div`
    display: flex;
    flex: 1;
    margin: 0 3px;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    justify-content: center;
    transition: background-color 200ms;
    .MuiSvgIcon-root {
        margin-right: 6px;
        color: grey;
    }
    .love {
        color: red;
    }
    .share {
        transform: scaleX(-1);
    }
    :hover {
        background-color: lightgrey;
    }
    @media(max-width: 424px) {
        .MuiSvgIcon-root {
            margin-right: 0px;
        }
        p {
            display: none;
        }
    }
`