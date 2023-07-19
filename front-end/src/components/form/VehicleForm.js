import { useState } from 'react'

import formStyles from './Form.module.css'

import Input from './Input'


function VehicleForm({ handleSubmit, vehicleData, btnText, isCreation = true }) {
  const [vehicle, setVehicle] = useState(vehicleData || {})
  const [image, setImage] = useState({})
  const [preview, setPreview] = useState([])

  console.log(vehicle)

  function onFileChange(e) {
    console.log(Array.from(e.target.files))
    setPreview(Array.from(e.target.files))

    setImage({ images: [...e.target.files] })
  }

  function handleChange(e) {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value })
  }


  const submit = async (e) => {
    e.preventDefault()     
    let canCreate = true   
    const message = 'Todos os campos devem ser preenchidos'
    
    if(!vehicle.name){
      canCreate = false
      return alert(message)
    }
    if(!vehicle.model){
      canCreate = false
      return alert(message)
    }
    if(!vehicle.brand){
      canCreate = false
      return alert(message)
    }
    if(!vehicle.state){
      canCreate = false
      return alert(message)
    }
    if(!vehicle.kilometers){
      canCreate = false
      return alert(message)
    }
    if(!vehicle.year){
      canCreate = false
      return alert(message)
    }
    if(!vehicle.price){
      canCreate = false
      return alert(message)
    }
    if(!Object.keys(image).length){
      canCreate = false
      return alert('O anúncio deve conter uma imagem')
    }


    if(canCreate) handleSubmit({ vehicle, image })
  }

  return (
    <form onSubmit={submit} className={formStyles.form_container}>
      <div className={formStyles.preview_vehicle_images}>
        {preview.length > 0
          ? preview.map((image, index) => (
            <img
              src={URL.createObjectURL(image)}
              alt={vehicle.name}
              key={`${vehicle.name}+${index}`}
            />
          ))
          : vehicle.images &&
          vehicle.images.map((image, index) => (
            <img
              src={`${process.env.REACT_APP_API}/images/vehicles/${image}`}
              alt={vehicle.name}
              key={`${vehicle.name}+${index}`}
            />
          ))}
      </div>
      {isCreation ? 
      (
        <Input
        text="Imagens do veículo"
        type="file"
        name="images"
        accept={"image/*"}
        handleOnChange={onFileChange}
        multiple={true}
      />
      )
        : 
      ''
      }
      
      <Input
        text="Nome do veículo"
        type="text"
        name="name"
        placeholder="Digite o nome"
        handleOnChange={handleChange}
        value={vehicle.name || ''}
      />
      <Input
        text="Marca do veículo"
        type="text"
        name="brand"
        placeholder="Digite a marca"
        handleOnChange={handleChange}
        value={vehicle.brand || ''}
      />
      <Input
        text="Modelo do veículo"
        type="text"
        name="model"
        placeholder="Digite o modelo"
        handleOnChange={handleChange}
        value={vehicle.model || ''}
      />
      <Input
        text="Estado do vendedor"
        type="text"
        name="state"
        placeholder="Ex: SP"
        handleOnChange={handleChange}
        value={vehicle.state || ''}
      />
      <Input
        text="A kilometragem do veículo"
        type="number"
        name="kilometers"
        placeholder="Ex: 000000"
        handleOnChange={handleChange}
        value={vehicle.kilometers || ''}
      />
      <Input
        text="Ano do veículo"
        type="number"
        name="year"
        placeholder="Ex: 0000"
        pattern={'.{4,}'}
        value={vehicle.year || ''}
        handleOnChange={handleChange}
      />
      <Input
        text="Preço do veículo"
        type="number"
        name="price"
        placeholder="Ex: 000000"
        value={vehicle.price || ''}
        handleOnChange={handleChange}
      />
      <input type="submit" value={btnText} />
    </form>
  )
}

export default VehicleForm;
