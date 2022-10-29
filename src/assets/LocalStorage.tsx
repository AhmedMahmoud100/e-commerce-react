

import {ItemType} from '../Types/JsonDataType'

 export function SetDataToStorage (items :ItemType[],itemsNumber : number[]){
    localStorage.setItem("storageData",JSON.stringify(items))
    localStorage.setItem("storageNumbers",JSON.stringify(itemsNumber))
}

export function GetDataFromStorage(setnumber :(value: number[]) => void,setarray:(value :ItemType[]) => void  ){
    const StorageNumbers  = JSON.parse(localStorage.getItem("storageNumbers")!)
     setnumber(StorageNumbers)
     const StorageData  = JSON.parse(localStorage.getItem("storageData")!)
    setarray(StorageData)
}