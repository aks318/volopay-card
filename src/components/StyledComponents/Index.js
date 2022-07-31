import React from 'react'
import {FancyButton, StyleButton, SubmitButton} from './Components/Button/Button'

const Index = () => {
  return (
    <>
    <StyleButton>Button</StyleButton>
    <br />
    <StyleButton variant = 'outline'>Button</StyleButton>
    <FancyButton as="a">FancyButton</FancyButton>
    <br />
    <SubmitButton>Submit</SubmitButton>
    </>
  )
}

export default Index