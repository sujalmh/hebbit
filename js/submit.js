var verified_status =0;

let keys = document.querySelectorAll('input');

const input_fields = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  telephone:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
}

const validate = (field, regex) => {
  regex.test(field.value) ? field.className = 'is-valid' : field.className = 'is-invalid';
}


$('#submitButton').click(function() {
  element.classList.add("clicked");
  element.classList.remove("checkmark");
});

keys.forEach(item => item.addEventListener(
  'keyup', e => {
    validate(e.target, input_fields[e.target.attributes.name.value])
  }
));

