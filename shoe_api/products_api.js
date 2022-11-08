function ShoeAPI(DataFactory){
    async function getData(req, res){
       try {
        const bigData = await DataFactory.getAll()
        res.json({
            status: 'success',
            bigData
        })
        
       } catch (error) {
        res.json({
            status: 'error',
            error: error.stack
        })
        
       } 
    }
    return{
        getData
    }

}