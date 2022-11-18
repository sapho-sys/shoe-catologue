


document.addEventListener('DOMContentLoaded', async   function(){
const brandTemplateText = document.querySelector('.shoesTemplate');
const brandTemplate = Handlebars.compile(brandTemplateText.innerHTML);
const brandElem = document.querySelector('.shoes');
 
const shoeFunctions = ApiService()

 // add shoes to localstorage
 localStorage.setItem("shoes", JSON.stringify(await shoeFunctions.getData()))
    
 shoeFunctions.getData()
.then(function (results){
    const array = results.data;
    console.log(array);
    brandElem.innerHTML = brandTemplate({
        array})
})


})





