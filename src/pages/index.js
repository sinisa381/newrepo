import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Paragraph from "../components/paragraph"

import { FiFolder, FiPhone, FiPower } from "react-icons/fi"
import Layout from "../components/layout"
import Index from "../components/tester"
import Index2 from "../components/tester3"
import Index3 from "../components/tester4"
import Blob from "../components/blob"

const items = [
  {
    name: <FiPhone color={"black"} size={"15px"} />,
    phone: "12312312",
  },
  {
    name: <FiPhone color={"black"} size={"15px"} />,
    phone: "12312312",
  },
  {
    name: <FiPhone color={"black"} size={"15px"} />,
    phone: "12312312",
  },
  {
    name: <FiPhone color={"black"} size={"15px"} />,
    phone: "12312312",
  },
  {
    name: <FiPhone color={"black"} size={"15px"} />,
    phone: "12312312",
  },
  {
    name: <FiPhone color={"black"} size={"15px"} />,
    phone: "12312312",
  },
  ,
  ,
]
const IndexPage = () => {
  const [hover, setHover] = useState(false)
  const one = Math.floor(Math.random() * 10)
  const two = Math.floor(Math.random() * 10)
  const three = Math.floor(Math.random() * 10)
  const four = Math.floor(Math.random() * 10)
  let arr = [one, two, three, four]
  console.log(arr)
  console.log(one)
  console.log(two)
  console.log(three)
  console.log(four)
  console.log(Math.floor(Math.random() * 10))
  console.log(Math.random())
  console.log(Math.random())
  console.log(Math.random())
  return (
    <Layout>
      <C>
        <Text>
          tralalalalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </Text>
        <Blober></Blober>
      </C>
      <Paragraph />
      <Fixed>
        {/* <Index items={items} /> */}
        <Index2 items={items} btn={<FiPower />} />
        {/* <Index3 items={items} btn={<FiFolder />} /> */}
      </Fixed>
      <Red hover={hover} />
      <Spacer />
      <Blue
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      />
      <MyButton>
        <MyFlex>
          <One>one</One>
          <Two>two</Two>
        </MyFlex>
      </MyButton>
      <Spacer m={"5rem 0"} />
    </Layout>
  )
}

export default IndexPage

const Spacer = styled.div`
  margin: 1rem 0;
  margin: ${props => props.m};
`

const Blue = styled.div`
  background-color: blue;
  width: 1rem;
  height: 1rem;
  border-radius: 99999px;
`
const animate = keyframes`
0%{
  transform:translate(100px, 100px)
}
50%{
  transform:translate(200px, 200px)
}
100%{
  transform:translate(300px, 300px)
}
`

const Red = styled.div`
  background-color: red;
  width: 1rem;
  height: 1rem;
  border-radius: 99999px;
  opacity: ${props => (props.hover ? 1 : 0)};
  transition: all 0.3s;
  /* transform: translate3d(
    ${props => (props.hover ? "-40px, -40px, 30px" : "0, 0, 0")}
  ); */
  animation: ${props => props.hover && animate} 3s ease;
`

const MyButton = styled.button`
  max-width: 300px;
  width: 100%;
  background-color: #000;
  color: #eee;
  outline: none;
  border: none;
  padding: 0.4rem 0.8rem;
`

const MyFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const One = styled.div`
  background-color: yellow;
`
const Two = styled.div`
  background-color: blue;
  position: relative;
`
const Fixed = styled.div`
  position: fixed;
  top: 40vh;
  right: 5vw;
  z-index: 1000;
`

const Blober = styled(Blob)`
  position: relative;
`
const C = styled.div`
  /* position: relative; */
  background-color: #000;
  z-index: 10000;
  & > ${Blober} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
  }
  & > ${Text} {
    /* position: absolute; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;
    color: #ffffff;
  }
`
const Text = styled.div`
  color: #ffffff;
  position: absolute;
  top: 50%;
  z-index: 1000000000;
`
