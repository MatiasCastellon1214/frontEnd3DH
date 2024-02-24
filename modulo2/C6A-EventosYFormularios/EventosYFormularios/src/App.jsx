import { useState } from 'react'

import './App.css'

function App() {
  //Creamos el esstado para cada input del formulario
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //Creamos el manejador para el evento onSubmit
  const onChangeUserName = (e)=> setUserName(e.target.value);
  const onChangePassword = (e)=> setPassword(e.target.value);


  //Creamos una función para validar el nombre del usuario (mayor a dos caracteres y sin espacios en blanco)
  const validateUserName = (userName) =>{

    //Eliminamos los espacios en blanco
    const withOutSpaces = userName.trim();

    //Validamos la  extensión
    if(withOutSpaces.length > 2){
      return true;
    } else {
      return false;
    }

  };

  //Creamos una funcióon para validar el password(mayor a 5 caracteres y al menos un número)
  const validatePassword = (password)=>{

    //Eliminamos los espacios en blanco
    const withOutSpaces = password.trim();

    //Separamos el string en un array para luego
    //recorrerlo y validar si existe al menos un número
    const passwordAsArray = withOutSpaces.split("");

    //Some nos retornará true si al menos una de las
    //iteraciones es verdadera

    const hasNumber = passwordAsArray.some((character)=>{
      //Si el valor  NaN, no es un número
      if(isNaN(character)){
        return false;
      } else{
        return true;
      }
    });

    //Validamos la extensión y que haya la menos un número

    if(withOutSpaces.length > 5 && hasNumber){
      return true;
    } else{
      return false;
    }

  };

  
  const onSubmitForm = (e)=>{
    e.preventDefault();

    //Realizamos las validaciones con los valores amacenados en el estado
    const isUseNameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);

    //Si al menos una de las validaions es falsa
    //mostramos el mensaje de error
    if(!isUseNameValid || !isPasswordValid){
      alert ('Alguno de los datos ingresados no es correcto')
    } else{

      //Por el momento solo vamos a mostrar el nombre del usuario
      alert(`Bienvenido: ${userName}`);
    }

  }

  return (
    <>
      <div className='App'>
        <div className='formulario'>
          {/*Pasamos nuestro manejador al evento onSubmit*/}
          <form onSubmit={onSubmitForm}>
            <input 
              type="text"
              placeholder='Nombre de Usuario'
              value={userName}
              onChange={onChangeUserName}
              style={{marginBottom:'10px', padding:'5px',borderRadius:'3px'}}
            />
            
            <input 
              type="password"
              placeholder='Password'
              value={password}
              onChange={onChangePassword}
              style={{marginBottom:'10px', padding:'5px',borderRadius:'3px'}}
            />

            {/*Mediante el type nos aseguramos que se dispare el evento onSubmit al hacer click en el botón*/}

            <button type='submit'>Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App
