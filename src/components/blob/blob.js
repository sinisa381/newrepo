import React from "react"
import styled, { css, keyframes } from "styled-components"

const Blob = props => {
  return (
    <Svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" reult="name" />
          <feColorMatrix
            in="name"
            mode="matrix"
            values="1 0 0 0 0
                                                     0 1 0 0 0
                                                     0 0 1 0 0
                                                     0 0 0 16 -8"
            reult="b"
          />
          <feBlend in="SourceGraphic" in2="b" />
        </filter>
      </defs>
      <g transform="translate(300, 300)">
        <path
          d="M120.4,-137C167.5,-103.9,225.1,-76.9,235.9,-38.2C246.7,0.3999999999999986,210.8,50.7,174.7,89.3C138.6,127.8,102.3,154.6,60.9,171.6C19.4,188.6,-27.2,195.8,-70.7,184.3C-114.2,172.8,-154.5,142.7,-162.6,105.2C-170.6,67.8,-146.4,23.099999999999998,-121.4,-4.5C-96.4,-32.2,-70.7,-42.900000000000006,-50.3,-80.7C-30,-118.4,-15,-183.2,10.8,-196.1C36.6,-209,73.3,-170,120.4,-137Z"
          fill="rgba(254, 132, 14, 1)"
          stroke="none"
          stroke-width="0"
        ></path>
        <path
          d="M118.1,-114.2C167.1,-99.5,230.8,-75.7,254.7,-31.4C278.6,12.9,262.7,77.7,226.5,121.7C190.3,165.8,133.8,189.1,84.9,186.8C35.9,184.5,-5.5,156.6,-37.4,132.2C-69.3,107.8,-91.8,86.9,-131.8,57C-171.7,27.200000000000003,-229.2,-11.7,-229.8,-46.2C-230.5,-80.7,-174.4,-110.8,-126.6,-125.7C-78.8,-140.6,-39.4,-140.3,-2.5,-137.4C34.5,-134.4,69,-128.9,118.1,-114.2Z"
          fill="rgba(254, 132, 14, 1)"
          stroke="none"
          stroke-width="0"
        ></path>
        <path
          d="M98.1,-110C142.3,-79.9,203.6,-63.3,227.2,-25.8C250.8,11.7,236.7,70.1,208.4,121.4C180.1,172.7,137.6,217,93.6,214.5C49.6,212.1,4.1,162.9,-33.5,131.9C-71.2,101,-101,88.2,-105.2,67.3C-109.5,46.4,-88.2,17.3,-79.8,-11.2C-71.4,-39.8,-75.9,-67.8,-64.7,-103.6C-53.6,-139.5,-26.8,-183.3,0.10000000000000009,-183.4C27,-183.5,54,-140,98.1,-110Z"
          fill="rgba(254, 132, 14, 1)"
          stroke="none"
          stroke-width="0"
        ></path>
        {/* <path
          d="M88.1,-117.4C99.1,-95.8,82.6,-53.7,99.1,-10.100000000000001C115.6,33.599999999999994,165.2,78.8,168.7,120.7C172.3,162.5,129.7,201.1,81.6,214.2C33.5,227.4,-20.2,215.2,-45,181.2C-69.7,147.1,-65.6,91.3,-70,54.5C-74.5,17.799999999999997,-87.5,0,-90,-21.1C-92.5,-42.2,-84.5,-66.7,-67.7,-87.2C-51,-107.8,-25.5,-124.4,6.5,-132.2C38.6,-140,77.1,-138.9,88.1,-117.4Z"
          fill="rgba(254, 132, 14, 1)"
          stroke="none"
          stroke-width="0"
        ></path> */}
      </g>
    </Svg>
  )
}

export default Blob

const rotate1 = keyframes`
from{
transform:rotate(0deg);
}
to{
transform:rotate(360deg);
}
`
const rotate2 = keyframes`
from{
transform:rotate(360deg);
}
to{
transform:rotate(0deg);
}
`

const Svg = styled.svg`
  filter: url(#goo);
  path {
    &:nth-child(1) {
      animation: ${rotate1} 80s infinite;
    }
    &:nth-child(2) {
      animation: ${rotate2} 70s infinite;
    }
    &:nth-child(3) {
      animation: ${rotate2} 60s infinite;
    }
    &:nth-child(4) {
      animation: ${rotate1} 50s infinite;
    }
  }
`
