const qs = (element)=>document.querySelector(element)

window.addEventListener("load", ()=>{ 
let $inputName = qs("#name")
$errorsName = qs("#errorsName")
$price = qs("#price")
$errorsPrice = qs("#errorsPrice")
$discount = qs("#discount")
$errorsDiscount = qs("#errorsDiscount")
$category = qs("#category_id")
$errosCategory = qs("#errorsCategory")
$stock = qs("#flexSwitchCheckDefault")
$errorsStock = qs("errorsStock")
$file = qs("#formFile")
$errorsFile = qs("#errorsFile")
$description = qs("#description")
$errorsDescription = qs("#errorsDescription")
$form = qs("#form")
$submitErrors = qs("#submitErrors")
 /* Expresiones */
 const validation = {
    valiName:/^[A-Za-z0-9\s]{5,40}$/g,
    valiDescription: /^[a-zA-ZÀ-ÿ\s]{20,90}$/,
    valiPrice:/^[1-9]*(\.?)[0-9]+$/,
    valiDiscount:/^\d{1,100}$/
}


    $inputName.addEventListener("blur", e =>{
        switch(true){
            case !$inputName.value.trim():
                $errorsName.innerHTML = "Ingrese el nombre del producto"
                $inputName.classList.add("is-invalid");
                break;
            case !validation.valiName.test($inputName.value):
                $errorsName.innerHTML = "Debe tener al menos 5 caracteres"   
                $inputName.classList.add("is-invalid");
                break;
            default:
                 $inputName.classList.remove("is-invalid");
                 $inputName.classList.add("is-valid"); 
                $errorsName.innerHTML = ""

        }
    })
    $price.addEventListener("blur", e =>{
        switch(true){
            case !$price.value.trim():
                $errorsPrice.innerHTML = "Debes ingresar un precio"
                $price.classList.add("is-invalid");
                break;
            case !validation.valiPrice.test($price.value):
                $errorsPrice.innerHTML = "Ingrese un precio correcto"   
                $price.classList.add("is-invalid");
                break;
            default:
                $price.classList.remove("is-invalid");
                $price.classList.add("is-valid");
                $errorsPrice.innerHTML = ""
        }
    })
    $discount.addEventListener("blur", e =>{
        switch(true){
            case !$discount.value.trim():
                $errorsDiscount.innerHTML = "Debe ingresar un descuento"
                $discount.classList.remove("is-invalid");
                break;
            default:
                $discount.classList.remove("is-invalid");
                $discount.classList.add("is-valid");
                $errorsDiscount.innerHTML = ""
        }
    })
/*     $inputStock.addEventListener("click", function (){
        $inputStock.value = "on"
        $inputStock.classList.toggle("is-valid")
        $inputStock.classList.remove("is-invalid")
        $errorsStock.innerHTML = ""
    })     */

    $file.addEventListener('change', function fileValidation(){
        let filePath = $file.value, //
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //solo lo q vamos a permitir que se adjunte
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $errorsFile.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';
            return false;
        }
    })
    $description.addEventListener("blur", e =>{
        switch(true){
            case !$description.value.trim():
                $errorsDescription.innerHTML = "Ingrese una descripcion del producto"
                $description.classList.remove("is-invalid");
                break;
            case !validation.valiDescription.test($description.value):
                $errorsDescription.innerHTML = "La descripcion tiene que tener entre 20 a 99 caracteres."   
                $description.classList.remove("is-invalid");
                break;
            default:
                $description.classList.remove("is-invalid");
                $description.classList.add("is-valid");
                $errorsDescription.innerHTML = ""
        }
    })
    $form.addEventListener("submit", function(event) {
        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;

        for (let index = 0; index < elementsForm.length - 1; index++) {
            if(elementsForm[index].value == ""
            && elementsForm[index].type!== "checkbox"
            && elementsForm[index].type !== "file"
            && elementsForm[index].type !== "form"
            || elementsForm[index].classList.contains("is-invalid")){
               elementsForm[index].classList.add("is-invalid");
                submitErrors.innerText = "Para editar, completar los campos señalados"
                errores = true;
            }
        } 
         if(!errores){
            alert("Producto Editado!")
            $form.submit()
        }
 
    })
})
