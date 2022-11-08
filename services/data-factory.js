function DataFactory(db){
    async function getAll(){
        const fethData = await db.manyOrNone(`SELECT * FROM shoes`);
        return fethData;
    }
    return{
        getAll
    }

}
export default DataFactory;