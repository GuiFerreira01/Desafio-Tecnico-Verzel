import api from '../../utils/api'

import { useState, useEffect } from 'react'

import styles from './Home.module.css'
import trashImage from '../../assets/img/icons8-lixo.svg'
import editImage from '../../assets/img/icons8-lápis-24.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Home() {
  const [role] = useState(localStorage.getItem('role') || '')
  const [token] = useState(localStorage.getItem('token') || '')
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    api.get('/listVehicles').then((response) => {
      console.log(response.data)
      setVehicles(response.data)
    })
  }, [])

  const isAdmin = atob(role) === 'ROLE_ADMIN'

  const EditVehicle = () => {
    console.log()
  }

  const DeleteModal = ({ vehicleId}) => {
    console.log(vehicleId)

  api
    .delete(`/vehicle/${vehicleId}`, {
      headers: {
        Authorization: `Bearer ${(token)}`
      },
    })
    .then((response) => {
      console.log(response.data)
      window.location.reload(true)
      return response.data
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <section>
      <div className={styles.vehicle_home_header}>
        <p>Carros usados</p>
      </div>
      <div className={styles.vehicle_container}>
        {vehicles.length > 0 &&
          vehicles.map((vehicle) => (
            <div className={styles.vehicle_card} key={vehicle.id}>
              <div
                style={{
                  backgroundImage: `url(data:image/webp;base64,${vehicle.image})`,
                }}
                className={styles.vehicle_card_image}
              ></div>
              <h3>{vehicle.name}</h3>
              <p>
                {vehicle.year} • {vehicle.kilometers.toLocaleString('pt-BR')} km • {vehicle.state}
              </p>
              <p className={styles.card_price}>
                <span className="bold">R${vehicle.price.toLocaleString('pt-BR')}</span>
              </p>
                {isAdmin ? (
                  <>
                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                      <Link 
                        className={styles.card_button}
                        style={{cursor: 'pointer', paddingRight: 21, display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
                        to={`/vehicle/edit/${vehicle.id}`}
                      >
                        <p style={{ padding: 10, margin: 0 }}>
                          Editar
                        </p>
                        <img src={editImage} width={20} alt={vehicle.name} />
                      </Link>
                      <button 
                        className={styles.card_button}
                        style={{cursor: 'pointer', paddingRight: 21, display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
                        onClick={()=>DeleteModal({ vehicleId: vehicle.id})}
                      >
                        <p style={{ padding: 10, margin: 0 }}>
                          Delete
                        </p>
                        <img src={trashImage} width={20} alt={vehicle.name} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                  </>
                )}
              </div>
          ))}
        {vehicles.length === 0 && (
          <p>Não há veículos cadastrados no momento!</p>
        )}
      </div>
    </section>
  )
}

export default Home
