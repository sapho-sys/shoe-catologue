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

    async function getBySize(req,res){
        try {
            const {size} = req.params
            const bigData = await DataFactory.getSize(size);
            res.json({
                status:'success',
                bigData
            })
        } catch (error) {
            res.json({
                status: 'error',
                error: error.stack
            })
            
        }
    }

    async function getByBrand(req, res){
        try {
            const {brand} = req.params
            const bigData = await DataFactory.getBrand(brand);
            res.json({
                status:'success',
                bigData
            })
            
        } catch (error) {
            res.json({
                status:'error',
                error:error.stack
            })
            
        }
    }

    async function getByColor(req, res){
        try {
            const {color} = req.params
            const bigData = await DataFactory.getColor(color);
            res.json({
                status:'success',
                bigData
            })
        } catch (error) {
            res.json({
                status:'error',
                error:error.stack
            })
            
        }
    }

    async function getByAll(req, res){
        try {
            const {color, brand, size} = req.params
            const bigData = await DataFactory.applyAll(color,brand,size);
            res.json({
                status:'success',
                bigData
            })
        } catch (error) {
            res.json({
                status:'error',
                error:error.stack
            })
        }
    }
    return{
        getData,
        getBySize,
        getByBrand,
        getByColor,
        getByAll

    }

}
export default ShoeAPI;