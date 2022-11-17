document.addEventListener('DOMContentLoaded', function(){
    const brandTemplateText = document.querySelector('.shoesTemplate');
const brandTemplate = Handlebars.compile(brandTemplateText.innerHTML);
const brandElem = document.querySelector('.shoes');
 

axios.get('https://shoe-catologue.herokuapp.com/api/shoes')
.then(function (results){
    const array = results.data;
    console.log(array);
    brandElem.innerHTML = brandTemplate({
        array})
})


})



