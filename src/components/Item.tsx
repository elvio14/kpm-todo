import { useState } from "react"
import Checkbox from "./checkbox"

interface ItemProps {
    title: string
    description?: string
    status?: boolean
    edit?: boolean
}

export default function Item({ title, description, status = true, edit = false }: ItemProps){
    const [isHovered, setHover] = useState(false)
    const [isActive, setActive] = useState(status)

    const handleToggle = (val: boolean) => {
        setActive(val)
    }

    return (
        <>
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            className="flex gap-2 items-center">

            <Checkbox onToggle={handleToggle}/>
            <div className="text-left">
                { isActive ?
                    <><span className="text-xl font-bold">{title}</span> | <span className="overflow-hidden">{description}</span></>
                    :
                    <><span className="text-xl font-bold line-through">{title}</span> | <span className="overflow-hidden line-through">{description}</span></>
                }
            </div>

        </div>
        </>
    )
}