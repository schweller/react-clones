import React from 'react'
import styled from 'styled-components'

const BoardsList = () => {
  return (
    <Container>
      <div>
        <Heading>Personal boards</Heading>
        <List>
          <Item>
            <Link href="#">Welcome</Link>
          </Item>
          <Item>
            <Link href="#">Sample Board</Link>
          </Item>                
        </List>
      </div>
    </Container>    
  )
}

const Container = styled.div`
  margin: 40px 16px 0;
  width: 100%;
  max-width: 825px;
  min-width: 288px;
`

const Link = styled.a`
  display: block;
  height: 96px;
`

const Heading = styled.h3`
  margin-bottom: 15px;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.li`
  width: 23.5%;
  padding: 0;
  margin: 0 2% 2% 0;
  transform: translate(0);
  background-color: #026aa7;
  border-radius: 3px;
  height: 96px;
  padding: 8px;
  > a {
    color: white;
    text-decoration: none;
  }
`


export default BoardsList
