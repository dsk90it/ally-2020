import okrData from "./requests"

// Get OKR's
const getOkrs = async() => {
    const data = await okrData()
    const parent = data.filter((item) => !item.parent_objective_id)
    const children = data.filter((item) => item.parent_objective_id)
    const matchSubitems = (id) => children.filter((item) => item.parent_objective_id === id)

    parent.forEach((item) => {
        const getSubitems = matchSubitems(item.id)
        item.subitems = [...getSubitems]
    })
    
    return parent
}

export { getOkrs }