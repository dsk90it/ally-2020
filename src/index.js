import { renderOkr, generateOptions } from "./modules/views";
import { setFilters } from "./modules/filters";

generateOptions()

renderOkr()

document.querySelector('select').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderOkr()
})
