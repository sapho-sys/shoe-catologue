function ProductRoute(DataFactory,db){
    
    async function fetchData(req, res){
        res.render('index',{
            products: await DataFactory.getAll(),
            colors: await DataFactory.getAll(),
            brands: await DataFactory.getAll(),
            sizes: await DataFactory.getAll()
        })
    }

    async function fetchBySize(req, res){

    }

    async function fetchByBrand(req, res){

    }

    async function fetchByColor(req,res){

    }

    async function fetchByAll(req, res){

    }
    return{
        fetchData,
        fetchBySize,
        fetchByBrand,
        fetchByColor,
        fetchByAll
    }
}
export default ProductRoute