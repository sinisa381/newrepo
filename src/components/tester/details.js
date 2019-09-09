import React from "react"
import Item from "./item"
import Item2 from "./itemTwo"
import { FiFolder } from "react-icons/fi"
import styled, { keyframes, css } from "styled-components"

const items = [
  {
    name: <FiFolder color={"red"} />,
    phone: "12312312",
  },
  {
    name: <FiFolder />,
    phone: "123128766",
  },
  {
    name: <FiFolder />,
    phone: "123128766",
  },
  {
    name: <FiFolder />,
    phone: "123128766",
  },
  {
    name: <FiFolder />,
    phone: "123128766",
  },
  {
    name: <FiFolder />,
    phone: "123128766",
  },
]

// const measureHeight = () => {
//   let h = 32
//   if (items.length > 1) {
//     h = 32 * items.length
//     return h
//   }
//   return 32
// }

const Tester = ({ open, call }) => {
  return (
    <React.Fragment>
      {/* {open ? (
        <Flex open={open}>
          {items.map((item, i) => (
            <Item key={i} icon={item.name} phone={item.phone} />
          ))}
        </Flex>
      ) : (
        <None height={measureHeight()}>whatever</None>
      )} */}
      <Flex open={open}>
        {items.map((item, i) => (
          // <Item
          //   call={call}
          //   key={i}
          //   open={open}
          //   i={i}
          //   max={items.length}
          //   icon={item.name}
          //   phone={item.phone}
          // />
          <Item2
            call={call}
            key={i}
            open={open}
            i={i}
            max={items.length}
            icon={item.name}
            phone={item.phone}
          />
        ))}
      </Flex>
    </React.Fragment>
  )
}

export default Tester

const enter = keyframes`
from {
  opacity:0
}
to{
  opacity:1
}
`

const leave = keyframes`
from {
  opacity:1
}
to{
  opacity:0
}
`
const Flex = styled.div`
  /* opacity:${props => (props.open ? 1 : 0)};
  transition: all 500ms ease; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* overflow:hidden; */
  /* animation: ${props => (props.open ? enter : leave)} 300ms ease; */
   /* transform: rotate(0deg);
  transition: transform .2s ease-out;

  ${props =>
    props.open &&
    css`
      transform: rotate(45deg);
    `}; */
`
