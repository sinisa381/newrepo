import React from "react"
import styled, { keyframes } from "styled-components"

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

// const enter = key => keyframes`
// 0% {
// opacity:0;
// /* transform:translateY(calc(-20px + ${key * 100 + "px"})); */
// transform:translate(calc( ${
//   key === 0 ? 75 + "px" : key * 50 + 75 + "px"
// }),calc( ${key === 0 ? 5 + "px" : key * 10 + 5 + "px"}));
// }
// 100% {
// opacity:1;
// /* transform:translateY(0); */
// transform:translate(0,0);
// }
// `
const enter = key => keyframes`
0% {
opacity:0;
/* transform:translateY(calc(-20px + ${key * 100 + "px"})); */
transform:translate(calc( ${
  key === 0 ? 75 + "vw" : key * 50 + 75 + "vw"
}),calc( ${key === 0 ? 5 + "px" : key * 10 + "px"}));
}
/* 50%{
  opacity:1;
transform:translate( 60px,calc( ${key === 0 ? 5 + "px" : key * 10 + 5 + "px"}));
} */
100% {
opacity:1;
/* transform:translateY(0); */
transform:translate(0,0);
}
`
const leave = key => keyframes`
0% {
opacity:1;
/* transform:translateY(0); */
transform:translate(0,0);
}
50% {
opacity:1;
/* transform:translate(calc( ${
  key === 0 ? 60 + "vw" : key * 100 + "vw"
}),calc( ${key === 0 ? 100 + "vw" : key * 100 + "vw"})); */
}
100% {
opacity:0;
/* transform:translateY(calc(-10px + ${key * 30 + "px"})); */
transform:translate(calc( ${
  key === 0 ? 75 + "vw" : key * 50 + 75 + "vw"
}),calc( ${key === 0 ? 5 + "px" : key * 10 + "px"}));
}
`

const Phone = styled.div`
  background-color: tomato;
  color: #eee;
  margin-right: 0.5rem;
`
const Name = styled.div`
  background-color: navy;
  color: #eee;
`

const slow = "300ms"
const fast = "500ms"

const Flex = styled.div`
  display: flex;
  margin: 5px 0;
  transition: opacity 1s;
  opacity: ${props => (props.open ? 1 : 0)};
  animation: ${props => (props.open ? enter(props.i) : leave(props.i))}
    ${props => (props.open ? fast : slow)} ease;
  animation-duration: ${props => (props.open ? ".4s" : "1s")};
`
