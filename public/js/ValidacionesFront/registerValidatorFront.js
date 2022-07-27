function qs(element) {
    return document.querySelector(element)
  } 
 
  window.addEventListener("load", () => {
    /* declaramos variables que vamos a utilizar que contiene los elementos capturados del DOM */
    let $inputName = qs('#nombre'), 
    $nameErrors = qs('#nombreErrors'), /* podemos declarar muchas variables con una sola palabra reservada
     */
    $inputLastName = qs('#apellido'),
    $lastnameErrors = qs('#apellidoErrors'),
    $form = qs('#form'),
    $submitErrors = qs('#submitErrors'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $pass = qs('#pass'),
    $passErrors = qs('#passErrors'),
    $pass2 = qs('#datorepass'),
    $pass2Errors = qs('#pass2Errors'),
    $fecha = qs('#fecha'),
    $fechaErrors = qs('#fechaErrors'),
    $file = qs('#formFile'),
    $fileErrors = qs('#imgErrors'),
    $imgPreview = qs('#img-preview'), 
    regExAlpha = /^[a-zA-Z\}sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


  
    
    $inputName.addEventListener("blur", () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Ingrese Nombre";
                 $inputName.classList.add("is-invalid");
                 break;
            case !regExAlpha.test($inputName.value):
                 $nameErrors.innerHTML = "Nombre inválido";
                 $inputName.classList.add("is-invalid");
                 break;
            default: 
                 $inputName.classList.remove("is-invalid");
                 $inputName.classList.add("is-valid");
                 $nameErrors.innerHTML = "";
                 break;
        }
    })
    $inputLastName.addEventListener("blur", () => {
        switch (true) {
            case !$inputLastName.value.trim():
                 $lastnameErrors.innerHTML = "Ingrese Apellido";
                 $inputLastName.classList.add("is-invalid");
                 break;
            case !regExAlpha.test($inputLastName.value):
                 $lastnameErrors.innerHTML = "Apellido inválido";
                 $inputLastName.classList.add("is-invalid"); 
                 break;
            default: 
                 $inputLastName.classList.remove("is-invalid");
                  $inputLastName.classList.add("is-valid");
                 $lastnameErrors.innerHTML = "";
                 break;
      }
    })
    $email.addEventListener("blur", () => {
        switch (true) {
            case !$email.value.trim():
                 $emailErrors.innerHTML = "Ingrse su correo";
                 break;
            case !regExEmail.test($email.value):
                 $emailErrors.innerHTML = "Email inválido";
                 $email.classList.add("is-invalid");          
                 break;
         default: 
                 $email.classList.remove("is-invalid");
                 $email.classList.add("is-valid");
                 $emailErrors.innerHTML = "";
                 break;
      }
  }) 
    $pass.addEventListener('blur', function(){
        switch (true) {
            case !$pass.value.trim():
                 $passErrors.innerHTML = 'La contraseña es Obligatoria'
                 $pass.classList.add("is-invalid");
                 break;
            case !regExPass.test($pass.value):
                 $passErrors.innerHTML = 'La contraseña debe tener: 8 caracteres, al menos una mayúscula, una minúscula y un número';
                 $pass.classList.add("is-invalid");
                 break;    
            default:
                 $pass.classList.remove("is-invalid");
                 $pass.classList.add('is-valid') 
                 $passErrors.innerHTML = ""
                 break;
      }
  })
  $pass2.addEventListener('blur', function(){
        switch (true) {
            case !$pass2.value.trim():
               $pass2Errors.innerHTML = 'Reingresa tu contraseña'
               $pass2.classList.add('is-invalid')
               break;
          case $pass2.value !== $pass.value:
               $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
               $pass2.classList.add('is-invalid')
               break;    
          default:
                $pass2.classList.remove("is-invalid");               
                $pass2.classList.add('is-valid')
                $pass2Errors.innerHTML = ""
               break;
          }
      })
       $file.addEventListener('change', function fileValidation(){
        let filePath = $file.value, //
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //solo lo q vamos a permitir que se adjunte
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log($file.files);
            if($file.files && $file.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
    }) 
    $form.addEventListener("submit", function(event) {
      event.preventDefault()/*no se envia formulario hasta q no validemos q esta todo ok */
      let elementsForm = this.elements;/* creamos una variable para capturar todo el fomulario  */
      let errores = false;
    for (let index = 0; index < elementsForm.length - 1; index ++) { /* con el ciclo for recorremos los elementos del formulario */
            if(elementsForm[index].value == ""
            && elementsForm[index].type !== "date"
            && elementsForm[index].type !== "tel"
            && elementsForm[index].type !== "file" 
            && elementsForm[index].type !== "submit" 
            && elementsForm[index].type !== "reset"
            && elementsForm[index].type !== "button"
           || elementsForm[index].classList.contains("is-invalid")){
              elementsForm[index].classList.add("is-invalid");
              $submitErrors.innerHTML = "Los campos señalados son obligatorios"
              errores = true;
          }
        }
      if(!errores){
            alert("Registrado con exito!")
            $form.submit()
        }
    })
})