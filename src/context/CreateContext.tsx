import React, { useState } from 'react'
import { createContext } from "react";
import { useEffect } from 'react'
import allData from '../data/AllData.json'
import { GetDataFromStorage, SetDataToStorage } from '../assets/LocalStorage'
import { ItemType } from '../Types/JsonDataType'

type contextProps = {
  children: React.ReactNode
}

type itemsContextType = [
  array: ItemType[],
  setarray: React.Dispatch<React.SetStateAction<ItemType[]>>
]
type itemsNumberContextType = [
  itemsNumber: number[],
  setItemsNumber: React.Dispatch<React.SetStateAction<number[]>>
]

export const itemsContext = createContext<itemsContextType | []>([])
export const itemsNumberContext = createContext<itemsNumberContextType | []>([])

export function ContextProvider({ children }: contextProps) {
  const [array, setarray] = useState<ItemType[]>([])
  const [itemsNumber, setItemsNumber] = useState<number[]>([])
  const [store, setstore] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("storageNumbers") != null) {
      if (store) {
        GetDataFromStorage(setItemsNumber, setarray)
      }
    } else {
      let length = allData.length
      let initialNumbersArray = Array(length).fill(0)
      setItemsNumber([...initialNumbersArray])
    }
    setstore(false)
  }, [])

  useEffect(() => {
    if (!store) {
      SetDataToStorage(array, itemsNumber)
    }
  }, [itemsNumber])

  return (
    <itemsContext.Provider value={[array, setarray]}>
      <itemsNumberContext.Provider value={[itemsNumber, setItemsNumber]}>
        {children}
      </itemsNumberContext.Provider>
    </itemsContext.Provider>
  )
}