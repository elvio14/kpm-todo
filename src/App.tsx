import { useEffect, useState } from 'react'
import './App.css'
import ItemComponent from './components/Item'
import AddItem from './components/AddItem'

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

  const changeStatus = (index: number, status: boolean) => {
    const updatedItems = [...items];
    updatedItems[index].status = status;
    setItems(updatedItems);
  }

  const deleteItem = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index))
  }

  const editItem = (index: number, updatedItem: Item) => {
    setItems((prevItems) => 
      prevItems.map((item, i) => (i === index ? updatedItem : item))
    )
  }

  const clearData = () => {
    localStorage.clear()
    setItems([])
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]) //UPDATES LOCAL STORAGE EVERYTIME ITEMS CHANGES

  return (
    <div className='grid grid-rows-[1fr_10fr] h-[90vh] mx-12'>
      <h2 className='text-4xl font-bold'>TO-DO:</h2>
      <div>
        {
          items.map((item, index) => (
              <ItemComponent 
                item={item}
                key={index} 
                index={index} 
                onStatusChange={(status) => changeStatus(index, status)}
                onDelete={(index) => deleteItem(index)}
                onEdit={(item: Item) => editItem(index, item)}>
              </ItemComponent>
          ))
        }
        <AddItem addItem={addItem}/>
      </div>
      <div className='fixed bottom-4 left-4 cursor-pointer hover:text-[var(--main-red)]'><a onClick={clearData}>Clear All Data</a></div>
    </div>
  )
}
