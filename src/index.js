import { result } from "./data";

let okrs = ['1', '2']

const data = result.data
const parent = data.filter((item) => !item.parent_objective_id)
const children = data.filter((item) => item.parent_objective_id)

parent.forEach((item) => {
    item.subitems = [...okrs]
    return item
})

console.log(parent)
console.log(children)