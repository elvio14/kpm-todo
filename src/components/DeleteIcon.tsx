import { useState } from "react"


export default function DeleteIcon() {
    const [isHovered, setHover] = useState<boolean>(false)
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        className="cursor-pointer mt-1"
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
      >
        <desc>Created with Fabric.js 5.3.0</desc>
        <defs />
        <g transform="matrix(0.2719506193 0 0 0.2719506193 12 12)" id="X9L2dYsNCYphePmvvNBKB">
          <g>
            <g transform="matrix(1 0 0 1 0 0)" id="PT0ncL_hEVPnTlnzTiAmL">
              <path
                style={{
                  stroke: 'none',
                  strokeWidth: 1,
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeDashoffset: 0,
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  fill: isHovered ? 'var(--main-red)' : 'var(--main-grey)',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform="translate(-40, -40)"
                d="M 40 0 C 17.9 0 0 17.9 0 40 C 0 62.1 17.9 80 40 80 C 62.1 80 80 62.1 80 40 C 80 17.9 62.1 0 40 0 z"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 0 -0.0375)" id="QeEqH4l8eIQeQ9O4LTcPM">
              <path
                style={{
                  stroke: 'none',
                  strokeWidth: 1,
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeDashoffset: 0,
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  fill: 'var(--bg)',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform="translate(-40, -39.9625)"
                d="M 59.2 28.2 L 47.4 40 L 59.2 51.8 C 61.300000000000004 53.9 61.300000000000004 57.199999999999996 59.2 59.199999999999996 C 58.2 60.199999999999996 56.800000000000004 60.699999999999996 55.5 60.699999999999996 C 54.199999999999996 60.699999999999996 52.8 60.199999999999996 51.8 59.199999999999996 L 40 47.4 L 28.2 59.2 C 27.2 60.2 25.8 60.7 24.5 60.7 C 23.2 60.7 21.8 60.2 20.8 59.2 C 18.7 57.1 18.7 53.800000000000004 20.8 51.800000000000004 L 32.6 40 L 20.8 28.2 C 18.7 26.099999999999998 18.7 22.799999999999997 20.8 20.799999999999997 C 22.900000000000002 18.799999999999997 26.200000000000003 18.699999999999996 28.200000000000003 20.799999999999997 L 40 32.6 L 51.8 20.8 C 53.9 18.7 57.199999999999996 18.7 59.199999999999996 20.8 C 61.199999999999996 22.900000000000002 61.3 26.2 59.2 28.2 z"
                strokeLinecap="round"
              />
            </g>
          </g>
        </g>
      </svg>
    )
}