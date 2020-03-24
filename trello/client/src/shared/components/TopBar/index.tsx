import React from 'react'
import styled from 'styled-components'

function TopNav() {
  return (
    <BlueBar>
      <LeftContainer>
        <div>Home link</div>
        <div>Boards</div>
        <div>Search</div>
      </LeftContainer>
      <Logo>Logo</Logo>
      <RightContainer>
        Foo
      </RightContainer>
    </BlueBar>
  )
}

const BlueBar = styled.div`
  background-color: #026aa7;
  height: 32px;
  display: flex;
  align-items: center;
`

const LeftContainer = styled.div`
  display: flex;
  flex: 1;
`

const Logo = styled.div`
  display: flex;
  flex: 1;
`

const RightContainer = styled.div`
  display: flex;
  flex: 1;
`

export default TopNav