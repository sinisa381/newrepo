import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "./button"
import Details from "./details"

const Index = ({ call, itemss }) => {
  const [open, setOpen] = useState(false)
  const [mounted, isMounted] = useState(false)
  const openHandler = () => {
    setOpen(prev => !prev)
    isMounted(true)
  }

  const items = [
    {
      phone: "12312312",
    },
    {
      phone: "123128766",
    },
    {
      phone: "123128766",
    },
    {
      phone: "123128766",
    },
    {
      phone: "123128766",
    },
    {
      phone: "123128766",
    },
  ]
  return (
    <div>
      {open ? <div>open</div> : <div>closed</div>}
      {mounted ? (
        <Details call={call} open={open} />
      ) : (
        <Empty h={items.length} />
      )}
      <Button handler={openHandler} />
    </div>
  )
}

const Empty = styled.div`
  height: ${props => props.h * 42}px;
`

export default Index

// Index.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       text: PropTypes.string,
//       icon: PropTypes.element,
//     })
//   ),
// }
