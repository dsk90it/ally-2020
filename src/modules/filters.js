const filters = {
    sortBy: 'customer success',
    // selected: true
}

const getFilters = () => filters

const setFilters = (selectValue) => {
    filters.sortBy = selectValue
}

export { getFilters, setFilters }