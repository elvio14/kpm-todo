import { useState } from "react"
import { Item } from "../App"
import Checkbox from "./Checkbox.tsx"
import EditIcon from "./EditIcon"
import DeleteIcon from "./DeleteIcon"
import OkIcon from "./OkIcon"

interface ItemProps {
    item: Item
    index: number
    onStatusChange?: (status: boolean) => void
    onDelete?: (index: number) => void
    onEdit?: (item: Item) => void
}

export default function ItemComponent({item, index, onStatusChange, onDelete, onEdit }: ItemProps){
    const [isActive, setActive] = useState(item.status)
    const [isHovered, setHover] = useState(false)
    const [isEditing, setEditing] = useState(false)
    const [curItem, setCurItem] = useState<Item>(item)

    const handleToggle = (val: boolean) => {
        setActive(val)
        if(onStatusChange){
            onStatusChange(val)
            console.log("Child status val: " + val)
        }
    }

    const handleDelete = () => {
        if(onDelete){
            onDelete(index)
        }
    }

    const toggleEdit = () => {
        setEditing(!isEditing)
    }

    const handleEdit = () => {
        if(onEdit){
            onEdit(curItem)
        }
        toggleEdit()
    }

    const handleCancel = () => {
        toggleEdit()
    }
    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="mb-2">
        {
            isEditing ? 
                <div className="border-b-1 flex mx-2 my-3 gap-2">
                    <input 
                        type="text"
                        defaultValue={item.title} 
                        className="font-bold" 
                        onChange={(e) => setCurItem({ ...curItem, title: e.target.value })}></input>
                    <input
                        type="text" 
                        defaultValue={item.description} 
                        onChange={(e) => setCurItem({ ...curItem, description: e.target.value })}></input>
                    <OkIcon onClick={handleEdit}/>
                    <DeleteIcon onClick={handleCancel}/>
                    </div>
            :
                <div className="flex gap-2 items-center">
                    <Checkbox onToggle={handleToggle} status={item.status}/>
                    <div className="text-left">
                        { isActive ?
                            <><span className="text-lg font-bold">{item.title}</span> | <span className="overflow-hidden">{item.description}</span></>
                            :
                            <><span className="text-lg font-bold line-through">{item.title}</span> | <span className="overflow-hidden line-through">{item.description}</span></>
                        }
                    </div>
                    {isHovered &&
                        <>
                        <EditIcon onClick={toggleEdit}/>
                        <DeleteIcon onClick={handleDelete}/>
                        </>
                    }

                </div>
        }
        </div>
    )
}