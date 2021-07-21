const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = "Merci d'indiquer votre email"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse email invalide'
  }

  if (!values.password) {
    errors.password = "Merci d'indiquer votre mot de passe"
  }

  return errors
}

export default validate
