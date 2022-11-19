import React, { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import allData from "../data/AllData.json";
import { GetDataFromStorage, SetDataToStorage } from "../assets/LocalStorage";
import { ItemType } from "../Types/JsonDataType";

type contextProps = {
  children: React.ReactNode;
};

type itemsContextType = [
  array: ItemType[],
  setarray: React.Dispatch<React.SetStateAction<ItemType[]>>
];
type itemsNumberContextType = [
  itemsNumber: number[],
  setItemsNumber: React.Dispatch<React.SetStateAction<number[]>>
];

export const itemsContext = createContext( {} as itemsContextType);
export const itemsNumberContext = createContext( {} as itemsNumberContextType);

export function ContextProvider({ children }: contextProps) {
  const [array, setarray] = useState<ItemType[]>([]);
  const [itemsNumber, setItemsNumber] = useState<number[]>([]);

  useEffect(() => {
    if (localStorage.getItem("storageNumbers")) {
      GetDataFromStorage(setItemsNumber, setarray);
    } else {
      let length = allData.length;
      let initialNumbersArray = Array(length).fill(0);
      setItemsNumber([...initialNumbersArray]);
    }
  }, []);

  useEffect(() => {
    if (itemsNumber.length > 0) {
      SetDataToStorage(array, itemsNumber);
    }
  }, [itemsNumber]);

  return (
    <itemsContext.Provider value={[array, setarray]}>
      <itemsNumberContext.Provider value={[itemsNumber, setItemsNumber]}>
        {children}
      </itemsNumberContext.Provider>
    </itemsContext.Provider>
  );
}
