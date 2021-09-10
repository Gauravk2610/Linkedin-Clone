import { ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Seperation() {
    return (
        <Container>
            <DivideLine />
            <SortBy>
                Sort by: <h3>Top</h3>
            </SortBy>
            <ArrowDropDown />
        </Container>
    )
}

export default Seperation

const Container = styled.div`
    display: flex;
    margin: 5px 0;
    align-items: center;
    .MuiSvgIcon-root {
        cursor: pointer;
    }
`

const DivideLine = styled.div`
    height: 2px;
    flex: 1;
    background-color: lightgrey;
`

const SortBy = styled.div`
    padding: 0 10px;
    padding-right: 0px;
    cursor: pointer; 
    font-size: 12px;
    color: #00000099;
    display: flex;
    align-items: center;
    h3 {
        margin-left: 3px;
        color: black;
    }
`