
export type ItemType = {
  "id": number,
  "name": string,
  "src": string,
  "discount"?: string,
  "price": number
}

export type CategoriesType = {
  "Watches": ItemType[]
   "Sports": ItemType[]
   "MakeUp": ItemType[]
   "HeadPhones": ItemType[]
   "Glasses": ItemType[]
   "Cars": ItemType[]
   "Fashion": ItemType[]
   "MobilePhones": ItemType[]
   "All"? : ItemType[]
}