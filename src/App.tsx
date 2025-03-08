import { useEffect, useState } from 'react'

import './App.css'
import Item from './components/Item';
import AddItem from './components/AddItem';
import EditIcon from './components/EditIcon';
import DeleteIcon from './components/DeleteIcon';

export interface Item {
  title: string
  description?: string
  status: boolean
}

export default function App() {
  const getItemsFromLS = (): Item[] => {
    const storedItems = localStorage.getItem('items')
    return storedItems ? JSON.parse(storedItems) : []
  }
  const [items, setItems] = useState<Item[]>(getItemsFromLS)

  const addItem = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem])
  }


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items])

  return (
    <div className='grid grid-rows-[1fr_10fr] h-[90vh] mx-12'>
      <h2 className='text-4xl font-bold'>TO-DO:</h2>
      <div>
        {
          items.map((item, index) => (
            <div className='flex flex-row gap-4 items-center'>
            <Item title={item.title} description={item.description} key={index}></Item>
            <EditIcon/>
            <DeleteIcon />
            </div>
          ))
        }
        <AddItem addItem={addItem}/>
      </div>
    </div>
  )
}
