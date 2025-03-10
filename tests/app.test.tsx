import { it, expect, describe, test, afterEach, beforeEach } from 'vitest'
import "@testing-library/jest-dom/vitest"
import { Item } from '../src/App'
import {cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react'
import App from '../src/App'
import { BrowserRouter } from "react-router-dom"
import React from 'react'

describe('group', () => {       //TEST IF VITEST WORKS
    it('should', () => {
        expect(1).toBeTruthy()
    })
})

describe('App', () => {
    render(<App/>)
    //ADD ITEM -------------------------------------------------------------------------------------
    it('should render app and add an item', async () => {
        const inputTitle = screen.getByLabelText("add-input-title")
        expect(inputTitle).toBeInTheDocument()   //INPUT TEXT FOR TITLE
        const inputDesc = screen.getByLabelText("add-input-desc")
        expect(inputDesc).toBeInTheDocument()       //INPUT TEXT FOR DESC   

        fireEvent.change(inputTitle, { target: { value: "Play Guitar" } })    //UPDATE THE VALUES
        fireEvent.change(inputDesc, { target: { value: "With Hands" } })

        const addButton = screen.getByRole('button', { name: /Add/i })    //ADD BUTTON
        expect(addButton).toBeInTheDocument()
        fireEvent.click(addButton)

        const newItem = await screen.findByText("Play Guitar")   //NEW ITEM ADDED
        expect(newItem).toBeInTheDocument()
    })

    it('should not add item when title is empty', async () => {
        const inputTitle = screen.getByLabelText("add-input-title")
        expect(inputTitle).toBeInTheDocument()   //INPUT TEXT FOR TITLE
        const inputDesc = screen.getByLabelText("add-input-desc")
        expect(inputDesc).toBeInTheDocument()       //INPUT TEXT FOR DESC   

        fireEvent.change(inputTitle, { target: { value: "" } })    //MAKE SURE EMPTY
        fireEvent.change(inputDesc, { target: { value: "Desc but no title" } })

        const addButton = screen.getByRole('button', { name: /Add/i })    //ADD BUTTON
        expect(addButton).toBeInTheDocument()
        fireEvent.click(addButton)

        const newItem = await screen.queryByText("Desc but no title")   //NEW ITEM SHOULD NOT BE ADDED
        expect(newItem).not.toBeInTheDocument()
    })

    //EDIT ITEM -------------------------------------------------------------------------------------
    it('should edit the item', async () => {
        const title = screen.getByText("Play Guitar")
        expect(title).toBeInTheDocument()

        const desc = screen.getByText("With Hands")
        expect(desc).toBeInTheDocument()

        const outerDiv = screen.getByTestId("item-div")
        fireEvent.mouseOver(outerDiv)   //HOVER OVER THE ITEM TO RENDER EDIT ICON

        const editIcon = await screen.findByTestId('edit-icon')   //EDIT ICON TO CLICK
        expect(editIcon).toBeInTheDocument()
        fireEvent.click(editIcon)

        const titleTA = screen.getByLabelText("ta-title")   //TEXT AREA FOR TITLE
        const descTA = screen.getByLabelText("ta-desc")    //TEXT AREA FOR DESC    

        screen.debug()
        fireEvent.change(titleTA, { target: { value: "Play Air Guitar" } })    //UPDATE THE VALUES
        fireEvent.change(descTA, { target: { value: "With Style" } })
        screen.debug()
        const okIcon = screen.getByTestId("ok-icon")   //OK ICON TO CLICK
        expect(okIcon).toBeInTheDocument()
        fireEvent.click(okIcon)
        screen.debug()

        const newTitle = await screen.findByText("Play Air Guitar") //EXPECT UPDATED
        const newDesc = await screen.findByText("With Style")
        expect(newTitle).toBeInTheDocument()
        expect(newDesc).toBeInTheDocument()
    })

    //MARK ITEM AS DONE -------------------------------------------------------------------------------------
    it('should mark the item as done', async () => {
        const item = screen.getByText("Play Air Guitar")
        expect(item).toBeInTheDocument()

        const checkbox = screen.getByTestId("checkbox")   //CLICK CHECKBOX
        expect(checkbox).toBeInTheDocument()
        fireEvent.click(checkbox)

        const newItem = await screen.findByText("Play Air Guitar")
        expect(newItem).toHaveClass("line-through")
    })

    //MARK ITEM AS UNDONE -------------------------------------------------------------------------------------
    it('should mark the item as undone', async () => {
        const item = screen.getByText("Play Air Guitar")
        expect(item).toBeInTheDocument()

        const checkbox = screen.getByTestId("checkbox")   //CLICK CHECK BOX
        expect(checkbox).toBeInTheDocument()
        fireEvent.click(checkbox)

        const newItem = await screen.findByText("Play Air Guitar")
        expect(newItem).not.toHaveClass("line-through")    //NOT HAVE LINE THROUGH
    })

    //DELETE ITEM -------------------------------------------------------------------------------------
    it('should delete the item', async() => {
        const item = screen.getByText("Play Air Guitar")
        expect(item).toBeInTheDocument()

        const delIcon = screen.getByTestId("delete-icon")   //CLICK DELETE ITEM
        expect(delIcon).toBeInTheDocument()
        fireEvent.click(delIcon)

        const cancelDelete = await screen.findByText('No.')    //CANCEL DELETE, click "No."
        expect(cancelDelete).toBeInTheDocument()
        fireEvent.click(cancelDelete)

        const nextDel = await screen.findByTestId("delete-icon")  //CLICK DELETE AGAIN
        fireEvent.click(nextDel)    

        const confirmDelete = await screen.findByText('Delete.')    //CONFIRM DELETE, click "Delete."
        expect(confirmDelete).toBeInTheDocument()
        fireEvent.click(confirmDelete)

        expect(item).not.toBeInTheDocument()    //ITEM DELETED
    })
})