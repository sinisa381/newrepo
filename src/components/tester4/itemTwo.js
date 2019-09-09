import React from "react"
import styled, { keyframes } from "styled-components"

const ek = type => keyframes`
0%{
  transform:${
    type === true
      ? "translate3d(200px,0,0) scale(0)"
      : "translate3d(0,0,0)scale(1)"
  };
opacity:${type === true ? 0 : 1};
}
100%{
  transform:${
    type === true
      ? "translate3d(0px,0,0) scale(1)"
      : "translate3d(200px,0,0) scale(0)"
  };
opacity:${type === true ? 1 : 0};
}
`

const lk = keyframes`
  transform:translate3d(0, 0,0) scale(1);
0%{

}
90%{
  transform:translate3d(50vw, 0,0) scale(.1);

}
100%{
  transform:translate3d(100vw, 0,0) scale(0);

}
`
const transformations = {
  enter: "translate3d(0, 0, 0)",
  leave: "translate3d(100vw, 0, 0)",
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
  return 10 + key * 20 + "ms"
}

const Phone = styled.div`
  background-color: tomato;
  border-radius: 10px;
  padding: 0 18px;
  color: #eee;
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
  opacity: ${props => (props.open ? 1 : 0)};
  transition: all 0.1s;
  animation: ${props => ek(props.open)} 1s;
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-delay: ${props =>
    props.open ? enterDelay(props.i) : leaveDelay(props.i)};
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
