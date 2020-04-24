import { getFilters } from "./filters"

// Generate Select DOM
const renderSelectOptions = (data) =>{
    const selectEl = document.querySelector('select')
    let categories = []
    let selIndex = 0

    // get & push categories to array
    data.forEach(element => categories.push(element.category))

    // filter duplicates in categories array
    const uniqueArray = categories.filter((item, pos) => categories.indexOf(item) == pos)
    
    // create option elements foreach categories
    uniqueArray.forEach(element => {
        const optionEl = document.createElement('option')
        optionEl.text = element
        optionEl.value = element.toLowerCase()
        return selectEl.options.add(optionEl, selIndex++)
    })

    return selectEl
}

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
    return subitem.length > 0 ? displaySubitem : `<li class="no-items">No Subtasks</li>`
}

// Filter OKR's by Category
const sortOkrs = (data, sortBy) => {
    const byCategory = data.filter(item => item.category.toLowerCase() === sortBy)
    return byCategory
}

// Render Okr's
const renderOkr = (data) =>{
    const sectionEl = document.querySelector('section')
    const { sortBy } = getFilters()
    const filterData = sortOkrs(data, sortBy)
    
    sectionEl.innerHTML = ''

    if(filterData.length > 0){
        filterData.map(item => sectionEl.innerHTML += generateAccordion(item)).join('')
    } else{
        sectionEl.innerHTML = `<h4 class="text-center">No items to display</h4>`
    }

    console.log(filterData)
}

export { renderOkr, renderSelectOptions }