// =============================================================================================
//guardar usuario en base de datos
// =============================================================================================

const formularioCrear = document.querySelector('#formularioCrear')

try {
  formularioCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    guardarUsuario()
  })

  function guardarUsuario() {
    const url = 'https://test-parqueadero.onrender.com/api/usuario/'
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    const numero_documento = document.querySelector('#documento').value
    const correo_electronico = document.querySelector('#correo').value
    const clave = document.querySelector('#clave').value
    
    axios.post(url, {
      nombre: nombre,
      apellido: apellido,
      numero_documento: numero_documento,
      correo_electronico: correo_electronico,
      clave: clave
    }).then(res => {
      console.log(res.data);
    })
  }
} catch (error) {
  console.log(error)
}


// =============================================================================================
// encontrar usuario guardado en base de datos "login"
// =============================================================================================

const formularioIngresar = document.querySelector('#formularioIngresar')

try {
  formularioIngresar.addEventListener('submit', (e) => {
    e.preventDefault();
    iniciarUsuario()
  })

  function iniciarUsuario() {
    const url = 'https://test-parqueadero.onrender.com/api/usuario/'
    const correo_electronico = document.querySelector('#correoLogin').value
    const clave = document.querySelector('#claveLogin').value
    
    axios.get(url).then(res => {
      const usuarios = res.data

      for (const usuario of usuarios) {
        if (usuario.correo_electronico === correo_electronico && usuario.clave === clave) {
          return window.location.replace('http://127.0.0.1:5500/index.html')
        }
      }

      return alert('Usuario no encontrado')

    })
  }
} catch (error) {
  console.log(error)
}

// =============================================================================================
// Generar ticket y vehiculo
// =============================================================================================

const formularioCrearTicket = document.querySelector('#formularioCrearTicket')

try {
  formularioCrearTicket.addEventListener('submit', (e) => {
    e.preventDefault();
    guardarTicket()
  })

  function guardarTicket() {
    const urlVehiculo = 'https://test-parqueadero.onrender.com/api/vehiculo/'
    const urlTicket = 'https://test-parqueadero.onrender.com/api/ticket/'
    const tipo_vehiculo = document.querySelector('#tipo_vehiculo').value
    const placa = document.querySelector('#placa').value
    const hora_entrada = document.querySelector('#hora_entrada').value
    const hora_salida = document.querySelector('#hora_salida').value
    const tarifa = document.querySelector('#tarifa').value
    const total_pagar = document.querySelector('#total_pagar').value
    
    axios.post(urlVehiculo, {
      placa: placa,
      tipo_vehiculo: tipo_vehiculo
    }).then(res => {
      const idVehiculo = res.data.id
      axios.post(urlTicket,{
        tarifa: tarifa,
        hora_entrada: hora_entrada,
        hora_salida: hora_salida, 
        idVehiculo: idVehiculo
      }).then(response => {
        console.log(response.data)
        alert('Ticket creado')
      })
    })
  }
} catch (error) {
  console.log(error)
}