import getOkrs from './modules/requests'
import { renderOkr, renderSelectOptions } from './modules/views'
import { setFilters, getFilters } from './modules/filters'

getOkrs().then((result) => {
    renderSelectOptions(result)
    
    renderOkr(result)

    getFilters();

    document.querySelector('select').addEventListener('change', (e) => {
        const selectValue = e.target.value
        // const option = e.target.options
        // const index = e.target.selectedIndex
        // options[index].setAttribute('selected', 'selected')

        setFilters(selectValue)
        renderOkr(result)

        // console.log(getFilters());
    })
}).catch((err) => {
    console.log(err)
})
