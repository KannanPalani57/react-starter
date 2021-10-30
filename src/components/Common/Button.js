import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  color: ${(props) => props.color};
  padding: 0.5em 1.3em;
  background: ${(props) => props.background};
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
  }
`

function ColorButton({ children, background, color }) {
  return (
    <Button background={background} color={color}>
      {children}
    </Button>
  )
}

export default ColorButton
