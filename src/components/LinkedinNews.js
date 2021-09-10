import { Adjust, KeyboardArrowDown, KeyboardArrowUp, PriorityHigh } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'

const newsData = [
    {
        'title': 'Fat pay hikes are coming'
    },
    {
        'title': 'Electric cars are the future'
    },
    {
        'title': 'Is thurday the new black?'
    },
    {
        'title': 'Bitcoin on fire 🔥?'
    },
    {
        'title': 'Interviewers can call your bluff'
    },
]

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


function LinkedinNews() {
    
    const [showNews, setShowNews] = useState(false)
    
    const Content = ({title, index}) => (
        <NewsInfo key={index} show={showNews}>
            <Adjust />
            <NewsData>{truncate(title, 35)}</NewsData>
        </NewsInfo>
    )

    const showunShow = () => {
        if (showNews) {
            setShowNews(false)
            return
        }
        setShowNews(true)
        return
    }

    return (
        <Container>
            <News>
                <Header>
                    <Title>LinkedIn News</Title>
                    <PriorityHigh />
                </Header>
                <SubNews>
                    {newsData.map((data, index) => (
                        <Content key={index} title={data.title} index={index}/>
                    ))}
                    <ShowMore onClick={showunShow}>
                        <p>Show {showNews && 'less'} {!showNews && 'more'} {showNews ? <KeyboardArrowUp />: <KeyboardArrowDown />}</p>
                    </ShowMore>
                </SubNews>
            </News>
        </Container>
    )
}

export default LinkedinNews

const Container = styled.div`
    background-color: white;
    width: 100%;
    max-width: inherit;
    border: 1px solid lightgrey;
    border-radius: 6px;
    margin-bottom: 10px !important;
`

const News = styled.div`
    margin-bottom: 10px !important;

`

const Header = styled.div`
    margin: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .MuiSvgIcon-root {
        font-size: 12px;
        padding: 1px;
        border-radius: 3px;
        background-color: grey;
        color: white;
    }
`

const Title = styled.h4`
    font-weight: 500;
    color: rgb(0, 0, 0, 0.8)
`

const SubNews = styled.div`

`

const NewsInfo = styled.div`
    display: flex;
    padding: 10px 16px;
    cursor: pointer;
    align-items: center;
    :hover {
        background-color: lightgrey;
    }
    .MuiSvgIcon-root {
        font-size: 10px;
    }
    :nth-child(n+6){
        display: ${props => props.show ? ('flex'): ('none')};
    }
`

const NewsData = styled.div`
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;
`

const ShowMore = styled.div`
    margin: 0 16px;
    padding: 2px 4px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    border-radius: 4px;
    width: fit-content;
    align-items: center;

    p {
        display: flex;
        width: fit-content;
    }

    :hover {
        background-color: lightgrey;
    }
`