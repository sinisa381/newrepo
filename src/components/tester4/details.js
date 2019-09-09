import React from "react"
import Item from "./item"
import Item2 from "./itemTwo"
import styled, { keyframes, css } from "styled-components"

const Tester = ({ open, call, items }) => {
  return (
    <React.Fragment>
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
