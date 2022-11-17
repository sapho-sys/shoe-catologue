document.addEventListener('DOMContentLoaded', function(){
    const brandTemplateText = document.querySelector('.shoesTemplate');
const brandTemplate = Handlebars.compile(brandTemplateText.innerHTML);
const brandElem = document.querySelector('.shoes');


let shoeService = ApiService()

function showCars(){
    shoeService.getData()
    .then(function (results){
        const array = results.data;
        console.log(array);
        brandElem.innerHTML = brandTemplate({shoes:array})
    })
}

showCars();


})

function ApiService(){
    function getData(){
        const {results} =  axios.get(`/api/shoes`);
        return results.data;
    }


    function getBySize(size){
        const {results} = axios.get(`/api/shoes/size/${size}`);
        return results.data;
    }

    function getByBrand(brand){
        const {results} =  axios.get(`/api/shoes/brand/${brand}`);
        return results.data;
    }

     function getByColor(color){
        const {results} =  axios.get(`/api/shoes/color/${color}`);
        return results.data;
    }

     function getByAll(size, brand , color){
        const {results} =  axios.get(`/api/shoes/brand/${size}/size/${brand}/color/${color}`);
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




