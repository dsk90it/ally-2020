const filters = {
    sortBy: 'design'
}

const getFilters = () => filters

const setFilters = (selectValue) => {
    filters.sortBy = selectValue
}

export { getFilters, setFilters }