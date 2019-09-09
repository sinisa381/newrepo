import React from "react"
import styled from "styled-components"

const Phone = styled.div`
  /* background-color: tomato; */
  color: #eee;
  margin-right: 0.5rem;
`
const Name = styled.div`
  color: #eee;
`

const Flex = styled.div`
  display: flex;
  margin: 5px 0;
  transition: opacity 1s;
  opacity: ${props => (props.open ? 1 : 0)};
`

const Item = ({ icon, phone, i, open, call }) => {
  const handleClick = e => {
    call(parseInt(e.target.innerText))
  }
  return (
    <Flex open={open} i={i}>
      <Phone onClick={handleClick}>{phone}</Phone>
      <Name>{icon}</Name>
    </Flex>
  )
}

export default Item
