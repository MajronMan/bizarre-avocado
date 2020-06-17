function onFormSubmit(event) {
  event.preventDefault();
 
  const fd = new FormData(event.target)

  console.log("Form submitted, values: ")
  for (const [key, value] of fd.entries()) {
    console.log(key, ":", value);
  }

  return false
} 
 
  