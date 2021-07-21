const validation = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Veuillez saisir le titre'
  }

  if (!values.price) {
    errors.price = 'Veuillez saisir le prix'
  }

  if (!values.image) {
    errors.image = "Veuillez saisir l'adresse de l'image"
  }

  if (!values.description) {
    errors.description = 'Veuillez saisir une description'
  } else if (values.description.length < 20) {
    errors.description = 'Au minimum 20 caractères'
  }

  return errors
}

export default validation
