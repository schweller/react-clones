import React from 'react'
import styled from 'styled-components'

const Dashboard = () => {
  return (
    <Container>
      <StickyContainer>
        <StickyLeftNavigation>
          <StickyInnerContainer>
            <ul>
              <MenuItem>
                <Link href="#" active>Boards</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#">Models</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#">Start</Link>
              </MenuItem>
            </ul>
          </StickyInnerContainer>
        </StickyLeftNavigation>
        <AllBoards>
          <div>
            <ListHeading>Personal boards</ListHeading>
            <BoardList>
              <BoardItem>
                <BoardLink href="#">Welcome</BoardLink>
              </BoardItem>
              <BoardItem>
                <BoardLink href="#">Sample Board</BoardLink>
              </BoardItem>                
            </BoardList>
          </div>
        </AllBoards>
      </StickyContainer>
    </Container>
  )
}

type Active = {
  active?: boolean
}

const ListHeading = styled.h3`
  margin-bottom: 15px;
`

const BoardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const BoardItem = styled.li`
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

const BoardLink = styled.a`
  display: block;
  height: 96px;
`

const Link = styled.a<Active>`
  background-color: ${props => props.active ? "#e4f0f6" : "white"};
  color: ${props => props.active ? "#0079bf" : "black"};
  display: flex;
  padding: 6px 8px 6px 8px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  ${props => props.active ? 
    `` : 
    `
      &:hover {
        background-color: rgba(9,30,66,.08)
      }
    `
  }
`

const Container = styled.div`
  min-height: (100vh - 40px);
`

const StickyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

const StickyLeftNavigation = styled.div`
  position: sticky;
  top: 0px;
`

const StickyInnerContainer = styled.div`
  margin: 40px 0 0;
  padding: 0 16px;
  width: 240px;
`

const MenuItem = styled.li`
  margin-bottom: 4px;
`

const AllBoards = styled.div`
  margin: 40px 16px 0;
  width: 100%;
  max-width: 825px;
  min-width: 288px;
`

export default Dashboard