//guardar usuario en base de datos
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
// encontrar usuario guardado en base de datos login
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

      return alert('usuario no encontrado')

    })
  }
} catch (error) {
  console.log(error)
}