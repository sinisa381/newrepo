import React from "react"
import styled from "styled-components"

const Button = ({ handler, btn }) => {
  return <Wrapper onClick={handler}>{btn}</Wrapper>
}

export default Button

const Wrapper = styled.div`
  height: 33px;
  float: right;
  cursor: pointer;
`
