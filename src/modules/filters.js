const filters = {
    category: ''
}

const getFilters = () => filters

const setFilters = (selectValue) => {
    filters.category = selectValue
}

export { getFilters, setFilters }