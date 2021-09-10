import React from 'react'
import styled from 'styled-components'
import AddPost from './AddPost'
import Post from './Post'
import Seperation from './Seperation'

const userPost = [
    {
        'username': 'Gaurav Konde',
        'bio': 'We are anonymous',
        'profile': 'https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1636588800&v=beta&t=IduC4IeLwJ1v6o4bTpxfRxJPCJadeJ0-V4pi5WWcNUI',
        'time': '2h',
        'postDescription': "We Don't Hack To Impress We Hack To Express",
        'img': 'https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855',
        'totalCount': '6,459',
        'comments': '26' 
    },
    {
        'username': 'Tony Stark',
        'bio': 'Iron Man',
        'profile': 'https://th.bing.com/th/id/OIP.L2pN15up8yh_CNzWV9Z5NQHaHa?pid=ImgDet&rs=1',
        'time': '1h',
        'postDescription': "I am Iron Man",
        'img': 'https://wallpapercave.com/wp/wp5804926.jpg',
        'totalCount': '98,990',
        'comments': '10,000' 
    },
    {
        'username': 'Drone Tech',
        'bio': 'Teck Geek',
        'profile': 'https://th.bing.com/th/id/OIP.cR2DNVbehfcv8YpzJfhtfAHaFj?w=225&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        'time': '2h',
        'postDescription': "Launching Soon",
        'img': 'https://th.bing.com/th/id/R.2bef024d7d5a8a62b15fdbe8ace479d6?rik=5ugWsO4o%2fq9cyw&riu=http%3a%2f%2fs3.amazonaws.com%2fdigitaltrends-uploads-prod%2f2015%2f10%2fDJI-Phantom-3-Advanced_.jpg&ehk=jrT7uKdlM8sNYq2dSUtwK6adgw%2bOx9SJt5FyeGvbSE4%3d&risl=&pid=ImgRaw&r=0',
        'totalCount': '69',
        'comments': '30' 
    },
]

function Feed() {
    return (
        <Container>
            <AddPost />
            <Seperation />
            {userPost.map((data, index) => (
                <Post key={index} data={data}/>
            ))}
        </Container>
    )
}

export default Feed

const Container = styled.div`

`
