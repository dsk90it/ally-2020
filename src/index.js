import { renderOkr } from "./modules/views";
import { setFilters } from "./modules/filters";

renderOkr()

document.querySelector('select').addEventListener('change', (e) => {
    setFilters({
        category: e.target.value
    })
    renderOkr()
})
