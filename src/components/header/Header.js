import { Fragment } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'

const Header = ({ user }) => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          WF3-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {!user ? (
              <Nav.Link as={Link} to='/login'>
                Se connecter
              </Nav.Link>
            ) : (
              <Fragment>
                <Nav.Link as={Link} to='/admin' className='me-5'>
                  <i className='fas fa-user'></i> Admin
                </Nav.Link>
                <Nav.Link>Bonjour {user.displayName}</Nav.Link>
                <Nav.Link onClick={() => auth.signOut()}>
                  Se déconnecter
                </Nav.Link>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
