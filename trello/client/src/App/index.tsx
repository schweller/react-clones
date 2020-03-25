import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Normalize } from 'styled-normalize'

import TopBar from '../shared/components/TopBar'
import Routes from './Routes'
import BaseStyles from './BaseStyles'

function App() {
  return (
    <>
      <Normalize/>
      <BaseStyles/>
      <TopBar/>
      <Routes/>
    </>
  )
}

export default App