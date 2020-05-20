import React from 'react'
import styled from 'styled-components'
import EsportIcon from '../icons/Esport'


const Button = styled.button`
  background: #54BC58;
  border-radius: 38px;
  padding: 10px 28px;
`
const EsportButton = () => {
  return (
    <Button>
      <EsportIcon></EsportIcon>
    </Button>
  )
}

export default EsportButton