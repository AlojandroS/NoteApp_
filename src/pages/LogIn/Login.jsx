import { useForm } from 'react-hook-form'
import "./Login.css"

const Login = () => {


const {register, handleSubmit, formState:{errors}} = useForm();


const login = (datos) => {
  console.log(datos);
}
 
   return (
    <div className="container">
      <div className='form'>
        <div className='form-header'>
          <h2>ACCEDE A TU CUENTA</h2>
        </div>
        <form onSubmit={handleSubmit(login)}>
          <div className="form-input">
         
            <input
              id="email"
              type="email"
              placeholder="Ingresa tu email"
              {...register("email", {required:true})}
            />
            {errors.email?.type === "required" && <p className='error'> Por favor, introduce tu email</p>}
          </div>

          <div className="form-input">
            
            <input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              {...register("password", {required:true})}              
            />
            {errors.password?.type === "required" && <p className='error'> Por favor, introduce tu contraseña</p>}
          </div>

          <button  className="button-login " type="submit">Iniciar Sesion</button>
        </form>
      </div>
      
    </div>
  );
};

export default Login

