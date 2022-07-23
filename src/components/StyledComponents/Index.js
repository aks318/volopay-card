import React from 'react'
import {FancyButton, StyleButton} from './Components/Button/Button'

const Index = () => {
  return (
    <>
    <StyleButton>Button</StyleButton>
    <br />
    <StyleButton variant = 'outline'>Button</StyleButton>
    <FancyButton as="a">FancyButton</FancyButton>
    </>
  )
}

export default Index