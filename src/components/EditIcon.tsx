import { useState } from "react"

interface ChildProps {
  onClick: (value: boolean) => void
}

export default function EditIcon({onClick} : ChildProps){
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
        className="mt-1 cursor-pointer"
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        onClick={() => onClick(true)}
        data-testid="edit-icon"
      >
        <desc>Created with Fabric.js 5.3.0</desc>
        <defs />
        <g transform="matrix(0.943800507 0 0 0.943800507 13.789551244 10.9415965678)" id="QHQMuEbLxdUjFmDC-OGST">
          <path
            style={{
              stroke: 'none',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeDashoffset: 0,
              strokeLinejoin: 'miter',
              strokeMiterlimit: 4,
              fill: isHovered ? 'var(--main)' : 'var(--main-grey)',
              fillRule: 'nonzero',
              opacity: 1,
            }}
            transform=" translate(-9.5453351922, -11.0653444408)"
            d="M 13.52014 2.18377 L 17.296129999999998 5.3522099999999995 L 5.094289999999997 19.8938 L 1.3182999999999971 16.72536 z M 15.09855 0.3027 C 15.24301 0.13054000000000002 15.44995 0.022809999999999997 15.67384 0.0032300000000000106 C 15.897730000000001 -0.01635999999999999 16.12023 0.05379000000000001 16.29239 0.19826000000000002 L 18.80358 2.30539 C 18.96686 2.4424 19.06904 2.6386700000000003 19.08761 2.85101 C 19.10619 3.0633500000000002 19.03965 3.27438 18.90264 3.43767 L 17.73391 4.83051 L 13.957920000000001 1.6620700000000004 z M 0.78366 17.40985 L 4.51304 20.53917 L 0 22.130689999999998 z"
            strokeLinecap="round"
          />
        </g>
        <g transform="matrix(1.0722887512 0 0 1.0507840427 12 12)" id="cON-P4eTqDIPZM4e1z3HZ">
          <path
            style={{
              stroke: isHovered ? 'var(--main)' : 'var(--main-grey)',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeDashoffset: 0,
              strokeLinejoin: 'miter',
              strokeMiterlimit: 4,
              fill: isHovered ? 'var(--main)' : 'var(--main-grey)',
              fillOpacity: 0,
              fillRule: 'nonzero',
              opacity: 1,
            }}
            transform=" translate(0, 0)"
            d="M 3.04128 -10.05184 L -7.022689999999999 -10.05184 C -8.47312 -10.05184 -9.648919999999999 -8.85197 -9.648919999999999 -7.37186 L -9.648919999999999 7.429550000000001 L -9.648919999999999 7.429550000000001 C -9.648919999999999 8.877790000000001 -8.498429999999999 10.05183 -7.079229999999999 10.05183 L 6.77327 10.05183 L 6.77327 10.05183 C 8.36145 10.05183 9.64892 8.738010000000001 9.64892 7.117330000000001 L 9.64892 -3.287699999999999"
            strokeLinecap="round"
          />
        </g>
      </svg>
    )
}