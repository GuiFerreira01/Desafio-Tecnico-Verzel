import api from '../../../utils/api'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './AddVehicle.module.css'

import VehicleForm from '../../form/VehicleForm'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

function AddVehicle() {
  const [token] = useState(localStorage.getItem('token') || '')
  const { setFlashMessage } = useFlashMessage()
  const history = useHistory()

  async function registerVehicle({vehicle, image = {} }) {
    let msgType = 'success'

    const formData = new FormData()

    await Object.keys(vehicle).forEach((key) => {
      if(image.images) formData.append(`file`, image.images[0])
        formData.append(key, vehicle[key])
    })

    const data = await api
      .post(`/vehicle`, formData, {
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
      <div className={styles.addvehicle_header}>
        <h1>Cadastre um veículo</h1>
      </div>
      <VehicleForm handleSubmit={registerVehicle} btnText="Cadastrar" />
    </section>
  )
}

export default AddVehicle
