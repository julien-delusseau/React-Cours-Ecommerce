import { useState } from 'react'
import { Button } from 'react-bootstrap'
import FormLogin from '../../components/form-login/FormLogin'
import FormRegister from '../../components/form-register/FormRegister'

const LoginPage = () => {
  const [isRegistered, setIsRegistered] = useState(true)

  return (
    <section id='login__section' className='my-5 w-50 mx-auto'>
      {isRegistered ? <FormLogin /> : <FormRegister />}
      <Button
        onClick={() => setIsRegistered(!isRegistered)}
        className='mt-3'
        variant='link'
      >
        {isRegistered ? 'Pas encore inscrit ?' : 'Déjà inscrit ?'}
      </Button>
    </section>
  )
}

export default LoginPage
