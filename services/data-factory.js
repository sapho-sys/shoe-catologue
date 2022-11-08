function DataFactory(db){
    async function getAll(){
        const fethData = await db.manyOrNone(`SELECT * FROM shoes WHERE in_stock > 0`);
        return fethData;
    }
    async function getSize(size){
        const sizeData = await db.manyOrNone(`SELECT * FROM shoes WHERE 
        size = $1 AND in_stock > 0`,[size]);
        return sizeData;
    }

    async function getBrand(brand){
        const brandData = await db.manyOrNone(`SELECT * FROM shoes WHERE
         brand = $1 AND in_stock > 0`,[brand]);
         return brandData;
    }
    
    async function getColor(color){
        const colorData = await db.manyOrNone(`SELECT * FROM shoes WHERE
        brand = $1 AND in_stock > 0`,[color]);
        return colorData;
    }
    return{
        getAll,
        getSize,
        getBrand

    }

}
export default DataFactory;