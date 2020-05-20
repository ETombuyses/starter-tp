import React from "react";
import styled, { css } from 'styled-components'

// sorte de typescript
import PropTypes from 'prop-types'


// the `` is the same as calling a function with () --> takes parameters
// styled component library let you insert css as parameter

// ${props => props.primary  --> define a variant of the button (here what css propreties a primary button has)
// says that when receiving a 'primary' as props, applies the main css + corresponding css
// styled.button --> we will use a css styled <button></button
const PrimaryButton = styled.button`
  background: #9146FF;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 8px 16px;

  ${props => props.secondary && css`
    background: #FFFFFF;
    color: #000000;
    padding: 8px 64px;
  `};
`

const Button = props => {
  // define received props
  const { secondary, text } = props

  return (
    // {...props} defines that this component can receive props whatever it is
    // no need if all the received props are specified
    <PrimaryButton {...props}>{text}</PrimaryButton>
  )
}

// type received props
Button.PropType = {
  text: PropTypes.string
}

export default Button