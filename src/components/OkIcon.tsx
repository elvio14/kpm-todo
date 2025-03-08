import { useState } from "react"

interface ChildProps {
    onClick: (value: boolean) => void
  }

export default function OkIcon({onClick} : ChildProps) {
    const [isHovered, setHover] = useState<boolean>(false)
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 80"
        width="16"
        height="16"
        className="mt-1 cursor-pointer"
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        onClick={() => onClick(true)}
      >
        <circle cx="40" cy="40" r="40" fill={isHovered ? 'var(--main)' : 'var(--main-grey)'} />
        <path
          fill="rgb(255,255,255)"
          d="M64 22.1c1.9 1.9 1.9 5 0 6.9L35.1 57.9c-1 1-2.2 1.4-3.4 1.4s-2.5-.5-3.4-1.4L16 45.7c-1.9-1.9-1.9-5 0-6.9s5-1.9 6.9 0L31.7 47.6 57.2 22.1c1.8-1.9 5-1.9 6.8 0z"
        />
      </svg>
    )
}