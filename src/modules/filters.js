const filters = {
    sortBy: 'customer success'
}

const getFilters = () => filters

const setFilters = (selectValue) => {
    filters.sortBy = selectValue
}

export { getFilters, setFilters }