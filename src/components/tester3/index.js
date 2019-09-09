import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Button from "./button"
import Details from "./details"

const maja = css`
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(99, 202, 236, 1) 0%,
    rgba(162, 162, 236, 1) 90.2%
  );
`

const maja2 = css`
  background-image: linear-gradient(
    16.5deg,
    rgba(203, 189, 240, 1) 24.7%,
    rgba(253, 184, 169, 1) 68.9%
  );
`

const maja3 = css`
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 156, 156, 1) 0%,
    rgba(179, 201, 241, 1) 90%
  );
`

const maja4 = css`
  background-image: linear-gradient(
    91.9deg,
    rgba(231, 0, 53, 1) -0.4%,
    rgba(255, 101, 61, 1) 20.7%,
    rgba(255, 255, 255, 1) 105.7%
  );
`

const maja5 = css`
  background-image: linear-gradient(
    107.5deg,
    rgba(208, 222, 170, 1) 11.7%,
    rgba(191, 226, 224, 1) 70.5%
  );
`

const maja6 = css`
  background-image: linear-gradient(
    109.6deg,
    rgba(185, 212, 242, 1) 11.2%,
    rgba(244, 210, 226, 1) 100.3%
  );
`

const maja7 = css`
  background-image: linear-gradient(
    109.6deg,
    rgba(148, 233, 194, 1) 11.2%,
    rgba(224, 235, 186, 1) 91.1%
  );
`
const Index = ({ call, items, btn }) => {
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen(prev => !prev)
  }

  return (
    <div>
      <Bck open={open}>
        <Details items={items} call={call} open={open} />
      </Bck>
      <Padding>
        <Button handler={openHandler} btn={btn} />
      </Padding>
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

const enter = `scale(1)`
const leave = `scale(0)`

const gradient = css`
  background-image: linear-gradient(
    68.1deg,
    rgba(248, 205, 205, 0.7) -0.3%,
    rgba(149, 170, 211, 0.7) 100.7%
  );
`
const gradient2 = css`
  background-image: radial-gradient(
    circle 953px at 1.4% 4%,
    rgba(160, 236, 191, 1) 0%,
    rgba(11, 138, 133, 1) 45.3%,
    rgba(9, 68, 103, 1) 100.2%
  );
`

const gradient3 = css`
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(28, 38, 47, 1) 0%,
    rgba(37, 47, 57, 1) 90%
  );
`

const Bck = styled.div`
  padding: 1rem;
  border-radius: 8px;
  transform: ${props => (props.open ? "scale(1)" : "scale(.7)")};
  ${props => props.open && gradient}
  background-color: ${props =>
    props.open ? "rgba(100, 178, 205, .5)" : "transparent"};
  transition: background-color ${props => (props.open ? 0.5 : 0.1)}s,
    transform 0.5s;
`

const Padding = styled.div`
  padding: 1rem;
`
