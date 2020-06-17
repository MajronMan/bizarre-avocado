const form = document.querySelector("form")

function onFormSubmit(event) {
  event.preventDefault();

  console.log(new FormData(form));
   
  return false;
} 

function onFormData(event) {
  console.log('formdata fired');
  
  // Get the form data from the event object
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value); 
  }
};
 