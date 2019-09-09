import React from "react"
import styled from "styled-components"

const Button = ({ handler }) => {
  return <Wrapper onClick={handler}>button</Wrapper>
}

export default Button

const Wrapper = styled.div`
  height: 33px;
  float: right;
  margin-top: 1rem;
`
