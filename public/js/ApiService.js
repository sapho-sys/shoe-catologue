function ApiService(){
    async function getData(){
        const {results} = await axios.get(`/api/shoes`);
        return results.data;
    }

    async function getBySize(size){
        const {results} = await axios.get(`/api/shoes/size/${size}`);
        return results.data;
    }

    async function getByBrand(brand){
        const {results} = await axios.get(`/api/shoes/brand/${brand}`);
        return results.data;
    }

    async function getByColor(color){
        const {results} = await axios.get(`/api/shoes/color/${color}`);
        return results.data;
    }

    async function getByAll(size, brand , color){
        const {results} = await axios.get(`/api/shoes/brand/${size}/size/${brand}/color/${color}`);
        return results.data;
    }

    return {
        getData,
        getBySize,
        getByBrand,
        getByColor,
        getByAll
    }

}