import { getOkrs } from "./okr"

// Generate Accordion DOM

// Generate Select DOM

// Render OKR's
const renderOkr = async () => {
    const data = await getOkrs()
    console.log(data);
}

export { renderOkr }