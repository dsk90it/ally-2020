import getOkrs from './modules/requests'
import { renderOkr, renderSelectOptions } from './modules/views'
import { setFilters } from './modules/filters'

getOkrs().then((result) => {
    renderSelectOptions(result)
    
    renderOkr(result)

    document.querySelector('select').addEventListener('change', (e) => {
        setFilters(e.target.value)
        renderOkr(result)
        console.log(e.target)
    })
}).catch((err) => {
    console.log(err)
})
