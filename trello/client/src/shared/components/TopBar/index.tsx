import React from 'react'
import styled from 'styled-components'

import Icon from '../Icon'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

const trelloIcon = <FontAwesomeIcon icon={faTrello} style={{width: "17px", height: "17px"}} />
const homeIcon = <FontAwesomeIcon icon={faHome} style={{width: "17px", height: "17px"}} />
const bellIcon = <FontAwesomeIcon icon={faBell} style={{width: "17px", height: "17px"}} />

function TopNav() {
  return (
    <BlueBar>
      <LeftContainer>
        <LinkItem>
          <Icon icon={homeIcon}/> 
        </LinkItem>
        <LinkItem>
          <Icon icon={trelloIcon}/> 
          <Label>Boards</Label>
        </LinkItem>
      </LeftContainer>
      <Logo>Logo</Logo>
      <RightContainer>
        <LinkItem>
          <Icon icon={bellIcon}/> 
        </LinkItem>
      </RightContainer>
    </BlueBar>
  )
}

const Label = styled.div`
  padding-right: 8px;
`

const LinkItem = styled.a`
  display: flex;
  align-items: center;  
  font-size: 14px;
  border-radius: 3px;
  text-decoration: none;
  background-color: hsla(0,0%,100%,.3);
  box-shadow: none;
  color: #fff;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
  margin: 0 4px 0 0;
  padding: 0;
  white-space: nowrap;
`

const BlueBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #026aa7;
  height: 32px;
  padding: 4px;
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
  justify-content: flex-end;
  > * {
    margin: 0;  
  }
`

export default TopNav