import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './AddVehicle.module.css'

import VehicleForm from '../../form/VehicleForm'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function EditVehicle() {
  const [vehicle, setVehicle] = useState({})
  const [token] = useState(localStorage.getItem('token') || '')
  const history = useHistory()

  const { id } = useParams()
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    api
      .get(`/vehicle/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setVehicle(response.data|| {})
      })
  }, [token, id])

  async function updateVehicle({ vehicle, image = {} }) {
    let msgType = 'success'

    const formData = new FormData()
    // console.log( image.images )

    await Object.keys(vehicle).forEach((key) => {
        if(image.images) formData.append(`file`, image.images[0])
        formData.append(key, vehicle[key])
    })


    const data = await api
      .patch(`/vehicle/${vehicle.id}`, formData, {
        headers: {
          Authorization: `Bearer ${(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((err) => {
        console.log(err)
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
    history.push('/')
  }

  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Editando o veículo: {vehicle.name}</h1>
        <p>Depois da edição os dados serão atualizados no sistema</p>
      </div>
      {vehicle.name && (
        <VehicleForm handleSubmit={updateVehicle} vehicleData={vehicle} btnText="Editar"  isCreation= {true}/>
      )}
    </section>
  )
}

export default EditVehicle
