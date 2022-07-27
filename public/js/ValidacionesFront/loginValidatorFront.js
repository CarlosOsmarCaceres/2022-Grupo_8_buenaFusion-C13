function qs(element) { return document.querySelector(element)
  } 

window.addEventListener("load",()=>{
    let $inputEmail = qs ("#email"),
    $emailErrors = qs ("#emailErrors"),
    $Pass = qs("#pass"),
    $passErrors = qs ("#passErrors"),
    $form = qs ("#form"),
    $submitErrors = qs ('#submitErrors'),
    regExAlpha = /^[a-zA-Z\}sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    
    $inputEmail.addEventListener("blur", () => {
        switch (true) {
            case !$inputEmail.value.trim():
                 $emailErrors.innerHTML = "Ingrse su correo";
                 $inputEmail.classList.add("is-invalid");
                 break;
            case !regExEmail.test($inputEmail.value):
                 $emailErrors.innerHTML = "Email inválido";
                 $inputEmail.classList.add("is-invalid");
                 break;
            default: 
                 $inputEmail.classList.remove("is-invalid");
                 $inputEmail.classList.add("is-valid");
                 $emailErrors.innerHTML = "";
                 break;
      }
  }) 
    $Pass.addEventListener('blur', function(){
        switch (true) {
            case !$Pass.value.trim():
                 $passErrors.innerHTML = 'Ingrese su contraseña'
                 $Pass.classList.add("is-invalid");
                 break;
            case !regExPass.test($Pass.value):
                 $passErrors.innerHTML = 'La contraseña debe tener: 8 caracteres, al menos una mayúscula, una minúscula y un número';
                 $Pass.classList.add("is-invalid");
                  break;    
            default:
                 $Pass.classList.remove("is-invalid");
                 $Pass.classList.add('is-valid') 
                 $passErrors.innerHTML = ""
                 break;
      }   
  })
  $form.addEventListener("submit", function(event){
    event.preventDefault()/*no se envia formulario hasta q no validemos q esta todo ok */
      let elementsForm = this.elements;/* creamos una variable para capturar todo el fomulario  */
      let errors = false;
    
      for (let index = 0; index < elementsForm.length - 1; index ++) { /* con el ciclo for recorremos los elementos del formulario */
          if(elementsForm[index].value == ""
           && elementsForm[index].type !== "submit"
           && elementsForm[index].type !== "checkbox"
           && elementsForm[index].type !== "button"
           || elementsForm[index].classList.contains("is-invalid")){
              elementsForm[index].classList.add("is-invalid");
              $submitErrors.innerHTML = "Hay errores en el formulario"
              errors = true;
          }
        }

      if(!errors){
            alert("Validado!")
            $form.submit()
        }
    })
})