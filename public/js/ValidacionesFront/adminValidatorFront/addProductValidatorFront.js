const qs = (element)=>document.querySelector(element)

window.addEventListener("load", ()=>{ 
let $inputName = qs("#name")
$errorsName = qs("#errorsName")
$inputPrice = qs("#price")
$errorsPrice = qs("#errorsPrice")
$inputDiscount = qs("#discount")
$errorsDiscount = qs("#errorsDiscount")
$category = qs("#category_id")
$errorsCategory = qs("#errorCategory")
$inputStock = qs("#flexSwitchCheckDefault")
$errorsStock = qs("errorsStock")
$inputFile = qs("#formFile")
$errorsFile = qs("#errorsFile")
$inputDescription = qs("#description")
$errorsDescription = qs("#errorsDescription")
$form = qs("#form")
$submitErrors = qs("#submitErrors")
 /* Expresiones */
 const validation = {
    valName:/^[A-Za-z0-9\s]{5,40}$/g,
    valDescription: /^[a-zA-ZÀ-ÿ\s]{20,90}$/,
    valPrice:/^[1-9]*(\.?)[0-9]+$/,
    valDiscount:/^\d{1,100}$/
}


    $inputName.addEventListener("blur", e =>{
        switch(true){
            case !$inputName.value.trim():
                $errorsName.innerHTML = "Ingrese el nombre del producto"
                $inputName.classList.add("is-invalid");
                break;
            case !validation.valName.test($inputName.value):
                $errorsName.innerHTML = "Debe tener al menos 5 caracteres"   
                $inputName.classList.add("is-invalid");
                break;
            default:
                 $inputName.classList.remove("is-invalid");
                 $inputName.classList.add("is-valid"); 
                $errorsName.innerHTML = ""

        }
    })
    $inputPrice.addEventListener("blur", e =>{
        switch(true){
            case !$inputPrice.value.trim():
                $errorsPrice.innerHTML = "Debes ingresar un precio"
                $inputPrice.classList.add("is-invalid");
                break;
            case !validation.valPrice.test($inputPrice.value):
                $errorsPrice.innerHTML = "Ingrese un precio correcto"   
                $inputPrice.classList.add("is-invalid");
                break;
            default:
                $inputPrice.classList.remove("is-invalid");
                $inputPrice.classList.add("is-valid");
                $errorsPrice.innerHTML = ""
        }
    })
    $inputDiscount.addEventListener("blur", e =>{
        switch(true){
            case !$inputDiscount.value.trim():
                $errorsDiscount.innerHTML = "Debe ingresar un descuento"
                $inputDiscount.classList.remove("is-invalid");
                break;
            default:
                $inputDiscount.classList.remove("is-invalid");
                $inputDiscount.classList.add("is-valid");
                $errorsDiscount.innerHTML = ""
        }
    })
     /* $category.addEventListener("blur", e =>{
        switch(true){
            case !$category.value.trim():
                $errorsCategory.innerHTML = "Seleccione una categoria"
                $category.classList.remove("is-invalid");
                break; */
             /* case !validation.val.test($category.value):
                $errorCategory.innerHTML = "La categoria no fue seleccionada"   
                $category.classList.remove("is-invalid");
                break;     */              
        /*     default:
                $category.classList.remove("is-invalid");
                $category.classList.add("is-valid");
                $errorsCategory.innerHTML = ""
        }
    })  */
    $inputStock.addEventListener("click", function (){
        $inputStock.value = "on"
        $inputStock.classList.toggle("is-valid")
        $inputStock.classList.remove("is-invalid")
        $errorsStock.innerHTML = ""
    })    

    $inputFile.addEventListener('change', function fileValidation(){
        let filePath = $inputFile.value, //
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //solo lo q vamos a permitir que se adjunte
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $errorsFile.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $inputFile.value = '';
/*             $imgPreview.innerHTML = ''; */
            return false;
        }
    })
    $inputDescription.addEventListener("blur", e =>{
        switch(true){
            case !$inputDescription.value.trim():
                $errorsDescription.innerHTML = "Ingrese una descripcion del producto"
                $inputDescription.classList.remove("is-invalid");

                break;
            case !validation.valDescription.test($inputDescription.value):
                $errorsDescription.innerHTML = "La descripcion tiene que tener entre 20 a 99 caracteres."   
                $inputDescription.classList.remove("is-invalid");

                break;
            default:
                $inputPrice.classList.remove("is-invalid");
                $inputPrice.classList.add("is-valid");
                $errorsDescription.innerHTML = ""
        }
    })
    $form.addEventListener("submit", function(event) { /* llamamos al formulario capturado como $form, */
  
    event.preventDefault()/*no se envia formulario hasta q no validemos q esta todo ok */
      let elementsForm = this.elements;/* creamos una variable para capturar todo el fomulario  */
      let errores = false;
    
      for (let index = 0; index < elementsForm.length - 1; index ++) { /* con el ciclo for recorremos los elementos del formulario */
          if(elementsForm[index].value == ""
              && elementsForm[index].type !== "submit"
           || elementsForm[index].classList.contains("is-invalid")){
              elementsForm[index].classList.add("is-invalid");
              $submitErrors.innerHTML = "Los campos señalados son obligatorios"
              errores = true;
          }
        }
      if(!errores){
            alert("Producto Creado!")
            $form.submit()
        }
    })
})
