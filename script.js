const email = document.getElementById('email');
const submitButton = document.querySelector('.email-btn');
const errorMessage = document.querySelector('.error');

const validateEmail = (email) => {
  return email.match (
     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

submitButton.addEventListener('click', () => {
  if (validateEmail(email.value)) return;

  errorMessage.style.cssText += 'opacity: 1;';
});
