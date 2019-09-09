import React from "react"
import styled from "styled-components"

const transformations = {
  enter: "translate3d(0, 0, 0)",
  leave: "translate3d(70vw, 0, 0)",
}

const leaveDelay = key => {
  if (key === 0) {
    return 0 + "ms"
  }
  return 10 + key * 30 + "ms"
}

const enterDelay = key => {
  if (key === 0) {
    return 0 + "ms"
  }
  return 5 + key * 5 + "ms"
}

const Phone = styled.div`
  /* background-color: #d9eeec; */
  border-radius: 10px;
  padding: 0 10px;
  color: rebeccapurple;
  /* text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6); */
  margin: 0 0.5rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-family: inherit;
  font-size: 16px;
`
const Icon = styled.div`
  color: tomato;
  cursor: pointer;
`
const Flex = styled.div`
  display: flex;
  margin: 5px 0;
  transform: ${props =>
    props.open ? transformations["enter"] : transformations["leave"]};
  transition: transform ${props => (props.open ? 400 : 1000)}ms;
  transition-delay: ${props => (props.open ? "0ms" : leaveDelay(props.i))};
  transition-timing-function: ease;
`
const Item = ({ icon, phone, i, open, call }) => {
  return (
    <Flex open={open} i={i}>
      <Phone>
        {phone} &amp; {i}
      </Phone>
      <Icon onClick={() => call(phone)}>{icon}</Icon>
    </Flex>
  )
}

export default Item
