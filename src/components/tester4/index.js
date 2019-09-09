import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "./button"
import Details from "./details"

const Index = ({ call, items, btn }) => {
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen(prev => !prev)
  }

  return (
    <div>
      <Details items={items} call={call} open={open} />
      <Button handler={openHandler} btn={btn} />
    </div>
  )
}

export default Index

// Index.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       text: PropTypes.string,
//       icon: PropTypes.element,
//     })
//   ),
// }
