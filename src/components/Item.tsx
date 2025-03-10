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
    const [warnDelete, setWarnDelete] = useState(false)
    const [curItem, setCurItem] = useState<Item>(item)

    const handleMouseEnter = () => {
        setHover(true)
        console.log("Hovering")
    }
    const handleMouseLeave = () => {
        setTimeout(() => {
            setHover(false)
        },  5000)  //Edit/Delete Stays for 5s
    }

    const handleToggle = (val: boolean) => {
        setActive(val)
        if(onStatusChange){
            onStatusChange(val)
            console.log("Child status val: " + val)
        }
    }

    const handleDelete = () => {
        setWarnDelete(true)
        setTimeout(() => {
            setWarnDelete(false)
        }, 5000) //5s auto close delete confirmation
    }

    const confirmDelete = () => {
        if(onDelete){
            onDelete(index)
        }
        setWarnDelete(false)
    }

    const cancelDelete = () => {
        setWarnDelete(false)
    }

    const toggleEdit = () => {
        setEditing(!isEditing)
    }

    const handleEdit = () => {
        if(onEdit){
            onEdit(curItem)
            console.log("Edited to:" + curItem)
        }
        toggleEdit()
    }

    const handleCancel = () => {
        toggleEdit()
    }

    return (
        <div onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                onTouchStart={handleMouseEnter} 
                onTouchEnd={handleMouseLeave} 
                className="mb-2"
                data-testid="item-div">
            {   isEditing ? 
                <div className="flex mx-2 my-3 gap-2 items-center max-w-[90vw]">
                    <div className="p-2 border-b-1">
                        <textarea 
                            rows={4} 
                            cols={18}
                            value={curItem.title} 
                            aria-label="ta-title"
                            className="font-bold h-[15vh]" 
                            onChange={(e) => setCurItem({ ...curItem, title: e.target.value })}></textarea> 
                    </div>
                    <div className="p-2 border-l-2 border-b-1">
                        <textarea 
                            rows={4} 
                            cols={24}
                            value={curItem.description} 
                            aria-label="ta-desc"
                            className="h-[15vh]"
                            onChange={(e) => setCurItem({ ...curItem, description: e.target.value })}></textarea>
                    </div>
                    <div className="flex gap-2 p-2">
                        <OkIcon onClick={handleEdit} />
                        <DeleteIcon onClick={handleCancel} />
                    </div>

                </div>
                //EDITING
            : //------------------------------------------------------------------------------------------------------
                //DEFAULT
                <div className="grid grid-cols-[20px_auto] gap-2 items-start">
                    <div className="mt-1">
                        <Checkbox onToggle={handleToggle} status={item.status}/>
                    </div>
                    <div className="flex">
                        <div className="flex gap-2 max-w-4xl">
                            { isActive ?
                                <>
                                    <div data-testid="title"><span className="text-lg font-bold">{item.title}</span></div>
                                    <div data-testid="desc" className="border-l-2 pl-2"><span className="text-lg">{item.description}</span></div></>
                                :
                                <>
                                    <div data-testid="title"><span className="text-md font-bold line-through">{item.title}</span></div>
                                    <div data-testid="desc" className="border-l-2 pl-2"><span className="text-md line-through">{item.description}</span></div>
                                </>
                            }
                        </div>
                        {isHovered &&
                            <div className="flex gap-2 ml-2 mt-1" data-testid="edit-div">
                                <EditIcon onClick={toggleEdit}/>
                                { warnDelete ?
                                    <><span>Are you sure to delete?</span> 
                                        <a className="text-[var(--main)] cursor-pointer" onClick={cancelDelete}>No.</a> 
                                        <a className="text-[var(--main-red)] cursor-pointer" onClick={confirmDelete}>Delete.</a></>
                                    :
                                    <DeleteIcon onClick={handleDelete} data-testid="delete-icon"/>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}