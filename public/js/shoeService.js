function ApiService(){
    async function getData(){
        const {data} = await axios.get(`/api/shoes`);
        return data.data;
    }
    async function getSize(){
        const {data} = await axios.get(`/api/shoes/size/${size}`);
        return data.data;
    }
    async function getBrand(){
        const {data} = await axios.get(`/api/shoes/brand/${brand}`);
        return data.data;
    }

    async function getColor(){
        const {data} = await axios.get(`/api/shoes/color/${color}`);
        return data.data
    } 
    async function filterAll(){
        const {data} = await axios.get(`/api/shoes/color/${color}
        /brand/${brand}/size/${size}`);
        return data.data;
    }

    return {
        getData,
        getSize,
        getBrand,
        getColor,
        filterAll
    }

}
