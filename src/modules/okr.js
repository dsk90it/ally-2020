import { result } from "../data"

// Get OKR's
export const getOkrs = () => {
    const data = result.data
    const parent = data.filter((item) => !item.parent_objective_id)
    const children = data.filter((item) => item.parent_objective_id)
    const matchSubitems = (id) => children.filter((item) => item.parent_objective_id === id)

    parent.forEach((item) => {
        const getSubitems = matchSubitems(item.id)
        item.subitems = [...getSubitems]
    })

    return parent
}