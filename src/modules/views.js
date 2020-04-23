import { getOkrs } from "./okr"
import { getFilters } from "./filters";

// Generate Accordion DOM
const generateAccordion = ({title, subitems}) => {
    return `
        <div class="clearfix fw accordion">
            <div class="accordion-link">${title}</div>
            <ol class="clearfix fw">${generateSubitems(subitems)}</ol>
        </div>
    `;
}

// Generate Subitems DOM
const generateSubitems = (subitem) => {
    const displaySubitem = subitem.map((item) => `<li>${item.title}</li>`).join('')
    subitem.length > 0 ? displaySubitem : `<li class="no-items">No Subtasks</li>`
}

// Generate Select DOM
const generateOptions = async () =>{
    let categories = []
    let selIndex = 0
    const data = await getOkrs()
    const selectEl = document.querySelector('select')

    // get & push categories to array
    data.forEach(element => categories.push(element.category))

    // filter duplicates in categories array
    const uniqueArray = categories.filter((item, pos) => categories.indexOf(item) == pos)
    
    // create option elements foreach categories
    uniqueArray.forEach(element => {
        const optionEl = document.createElement('option')
        optionEl.text = element
        return selectEl.options.add(optionEl, selIndex++)
    })

    return selectEl
}

// Render OKR's
const renderOkr = async () => {
    const data = await getOkrs()
    const { sortBy } = getFilters()
    const sectionEl = document.querySelector('section')
    const filterOkrs = data.filter(item => item.category.toLowerCase().includes('customer success'))

    sectionEl.innerHTML = ''

    data.map(item => sectionEl.innerHTML += generateAccordion(item)).join('');

    // console.log(data)
    console.log(filterOkrs)
    console.log('Sorting')
    console.log(sortBy)
}

export { renderOkr, generateOptions }