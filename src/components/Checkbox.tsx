import { useState } from "react"

interface ChildProps {
    onToggle: (value: boolean) => void;
    status: boolean
}

export default function Checkbox({onToggle, status} : ChildProps) {
    const [isActive, setActive] = useState<boolean>(status)
    const [isHovered, setHover] = useState<boolean>(false)

    const handleClick =  () => {
        const newStatus = !isActive
        setActive(newStatus)
        onToggle(newStatus)
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
            onClick={handleClick}
            className="cursor-pointer"
        >
            <desc>Created with Fabric.js 5.3.0</desc>
            <defs></defs>
            <g transform="matrix(1 0 0 1 16 16)">
                <path
                    style={{
                        stroke: isActive ? 'var(--main)' : 'rgb(35, 35, 35)',
                        strokeWidth: 2,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        fill: !isActive ? "rgb(64, 64, 64)" : isHovered ? "rgba(53,237,53,0.2)" : "none",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-14.1148304079, -14.1148306965)"
                    d="M 0 5.98842 C 0 2.6811099999999994 2.68111 0 5.98842 0 L 22.241239999999998 0 L 22.241239999999998 0 C 25.54855 0 28.229659999999996 2.68111 28.229659999999996 5.98842 L 28.229659999999996 22.241239999999998 L 28.229659999999996 22.241239999999998 C 28.229659999999996 25.54855 25.548549999999995 28.229659999999996 22.241239999999998 28.229659999999996 L 5.988419999999998 28.229659999999996 L 5.988419999999998 28.229659999999996 C 2.6811099999999977 28.229659999999996 -1.7763568394002505e-15 25.548549999999995 -1.7763568394002505e-15 22.241239999999998 z"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    )
}