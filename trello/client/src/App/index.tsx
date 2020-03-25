import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Normalize } from 'styled-normalize'

import TopBar from '../shared/components/TopBar'

function App() {
  return (
    <>
      <Normalize/>
      <TopBar/>
      <Container>
        <StickyContainer>
          <StickyLeftNavigation>
            <StickyInnerContainer>
              <Apple>
                <Orange>
                  <Link href="#" active>Boards</Link>
                </Orange>
                <Orange>
                  <Link href="#">Models</Link>
                </Orange>
                <Orange>
                  <Link href="#">Start</Link>
                </Orange>
              </Apple>
            </StickyInnerContainer>
          </StickyLeftNavigation>
          <AllBoards>
            <div>
              <h3>Personal boards</h3>
              <BoardList>
                <BoardItem>
                  <a href="#">Welcome</a>
                </BoardItem>
                <BoardItem>
                  <a href="#">Sample Board</a>
                </BoardItem>                
              </BoardList>
            </div>
          </AllBoards>
        </StickyContainer>
      </Container>
    </>
  )
}

type Active = {
  active?: boolean
}

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

const Link = styled.a<Active>`
  background-color: ${props => props.active ? "#e4f0f6" : "white"};
  color: ${props => props.active ? "#0079bf" : "black"};
  display: flex;
  padding: 6px 8px 6px 0;
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

const Apple = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Orange = styled.li`
  margin-bottom: 4px;
`

const AllBoards = styled.div`
  margin: 40px 16px 0;
  width: 100%;
  max-width: 825px;
  min-width: 288px;
`

export default App