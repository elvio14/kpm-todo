import { it, expect, describe, test, afterEach, beforeEach } from 'vitest'
import {cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react'
import "@testing-library/jest-dom/vitest"

import ItemComponent from '../../src/components/Item'
import { Item } from '../../src/App'
import React from 'react'
import userEvent from '@testing-library/user-event'

const testItem: Item = {
    title: "   Eat Banana   ",
    description: "  Peel first",
    status: true
}

const testItemNoDesc: Item = {
    title: "   Eat Durian   ",
    status: true
}

describe('Item', () => {
    beforeEach(() => {
        cleanup()
    })
    afterEach(()=>{
        localStorage.clear()
    })   //RESET AFTER

    it('should render a new Item with trimmed title and desc', () => {
        render(<ItemComponent item={testItem} index={0}/>)

        const title = screen.getByText('Eat Banana')
        expect(title).toBeInTheDocument()
        expect(title).toHaveTextContent(/^Eat Banana$/)  //ENSURE TRIMMED SPACES

        const desc = screen.getByText('Peel first')
        expect(desc).toBeInTheDocument()
        expect(desc).toHaveTextContent(/^Peel first$/)  //ENSURE TRIMMED SPACES
    })

    it('Not given description/notes, should render a new Item with trimmed title', () => {
        render(<ItemComponent item={testItemNoDesc} index={0}/>)
        const title = screen.getByText('Eat Durian')
        expect(title).toBeInTheDocument()
        expect(title).toHaveTextContent(/^Eat Durian$/)  //ENSURE TRIMMED SPACES
    }) 
})
