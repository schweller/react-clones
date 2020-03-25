import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.div<{ height?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height || '32px'};
  padding: 0 8px;
`

type Props = {
  icon?: JSX.Element;
  height?: string; 
}

const Icon = ({icon, height}: Props) => {
  return <IconWrapper height={height}>{icon}</IconWrapper>
}

export default Icon
