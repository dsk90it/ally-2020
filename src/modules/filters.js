const filters = {
    sortBy: ''
}

const getFilters = () => filters

const setFilters = (selectValue) => filters.sortBy = selectValue

export { getFilters, setFilters }