const filters = {
    sortBy: 'company' // default state is company
}

const getFilters = () => filters

const setFilters = (selectValue) => {
    filters.sortBy = selectValue
}

export { getFilters, setFilters }