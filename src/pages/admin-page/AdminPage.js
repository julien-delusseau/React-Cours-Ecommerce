import { Fragment, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import FormItem from '../../components/form-item/FormItem'
import './admin-page.css'

const AdminPage = ({ list, setList }) => {
  const [showForm, setShowForm] = useState(false)

  const addItem = item => {
    setList([item, ...list])
  }

  return (
    <Fragment>
      <h2>Page Administrateur</h2>

      <Table className='my-5' striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom de l'article</th>
            <th>Prix de l'article</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {!list ? (
            <h2>Loading ...</h2>
          ) : (
            list.map(({ id, title, price }) => (
              <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{price}€</td>
                <td className='btn__delete text-center'>
                  <i className='fas fa-trash'></i>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Button onClick={() => setShowForm(!showForm)}>Ajouter un article</Button>

      {showForm && <FormItem addItem={addItem} />}
    </Fragment>
  )
}

export default AdminPage
