const okrData = async () => {
    const response = await fetch('//okrcentral.github.io/sample-okrs/db.json')
    
    if(response.status === 200){
        const result = await response.json()
        return result.data
    } else {
        throw new Error ('Unable to fetch data')
    }
}

export { okrData as default }