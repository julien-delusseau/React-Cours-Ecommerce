const validation = values => {
  const errors = {}

  if (!values.firstname) {
    errors.firstname = 'Veuillez saisir votre prénom'
  }

  if (!values.lastname) {
    errors.lastname = 'Veuillez saisir votre nom'
  }

  if (!values.email) {
    errors.email = 'Veuillez saisir votre email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse email invalide'
  }

  if (!values.password) {
    errors.password = 'Veuillez saisir votre mot de passe'
  } else if (values.password.length < 6) {
    errors.password = 'Au minimum 6 caractères'
  }

  if (values.repeat !== values.password) {
    errors.repeat = 'Les mots de passe ne correspondent pas'
  }

  return errors
}

export default validation
