function ProductRoutes(ShoeAPI){
    async function show(req,res, next){
        try {
            let products = await ShoeAPI.getData()
            res.render('/api/shoes', {
				no_products: products.length === 0,
				products,
			});
        } catch (error) {
            next(error);
        }


    }
 return{
    show
 }
}

export default ProductRoutes;