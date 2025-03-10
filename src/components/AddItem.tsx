import { useState } from "react"
import { Item } from "../App";

interface AddItemProps {
    addItem: (item: Item) => void;
}

export default function AddItem({addItem} : AddItemProps) {
    const [newItem, setNewItem] = useState<Item>({
        title: '',
        description: '',
        status: true,
    })

    const [noTitle, setNoTitle] = useState<boolean>(false)

    const handleAddClick = () => {
        if (newItem.title) {
            const trimmedTitle = newItem.title.trim()
            const trimmedDesc = newItem.description?.trim()
            addItem({...newItem, title: trimmedTitle, description: trimmedDesc});  // Pass the item to App to handle it
            setNewItem({ title: '', description: '', status: true });  // Reset form
        }else{
            setNoTitle(true)
            setTimeout(() => {
                setNoTitle(false)
            }, 2000)
        }
      }

    return (
        <div className="my-4 border-b pb-1 max-w-[30rem] flex gap-2">
            <input 
                type="text"
                placeholder="Add TODO..."
                value={newItem.title}
                onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                className="font-bold"
                aria-label="add-input-title"
                style={{
                    border: noTitle ? "solid 1px red" : "none"
                }}
                >
            </input>
            <input 
                type="text" 
                placeholder="Notes..."
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                aria-label="add-input-desc">  
            </input>
            <button onClick={handleAddClick}>Add</button>
        </div>
    )
}