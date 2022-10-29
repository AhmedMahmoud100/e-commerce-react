
export type ItemType = {
  "id": number,
  "name": string,
  "src": string,
  "discount"?: string,
  "price": number
}

export type CategoriesType = {
  "watches": ItemType[]
   "sports": ItemType[]
   "makeUp": ItemType[]
   "headPhones": ItemType[]
   "glasses": ItemType[]
   "cars": ItemType[]
   "fashion": ItemType[]
   "mobilePhones": ItemType[]
   "all"? : ItemType[]
}