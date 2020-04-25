// Accordion
const initAccordion = () => {
    const accordion = document.querySelectorAll('.accordion')
    const accordionLink = document.querySelectorAll('.accordion-link')
    
    accordionLink.forEach((item) => {
        item.addEventListener('click', (e) => {
            const parent = e.target.parentElement
            
            // If parent doesn't have class `open` set/toggle it
            const setClass = !parent.classList.contains('open')
            
            /**
             * Open only one accordion at a time
             * To achieve this we need to `reset/remove open class` each and every click
            **/
            resetClass(accordion, 'open')

            if(setClass){
                parent.classList.toggle('open')
            }
        })
    })

    const resetClass = (ele, className) => {
        ele.forEach(item => item.classList.remove(className))
    }
}

export { initAccordion as default }