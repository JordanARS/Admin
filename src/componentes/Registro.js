import * as React from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';

const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: '#1D2432',
      color: 'white',
      borderColor: state.isFocused ? '#55B7C9' : '#4B5563',
      boxShadow: state.isFocused ? '0 0 0 1px #55B7C9' : 'none',
      '&:hover': {
        borderColor: state.isFocused ? '#55B7C9' : '#4B5563'
      }
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#55B7C9' : 'transparent',
      color: state.isFocused ? 'white' : 'white'
      
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#1D2432',
      color: 'white'
    }),
    singleValue: (base) => ({
        ...base,
        color: 'white'
      })
  };
  
  const facultad = [
    { label: 'Ingeniería de Sistemas', value: 'Ingeniería_Sistemas' },
    { label: 'Ingeniería Civil', value: 'Ingeniería_Civil' },
    { label: 'Derecho', value: 'Derecho' },
    { label: 'Psicología', value: 'Psicología' },
    { label: 'Medicina Veterinaria y Zootecnia', value: 'Veterinaria' },
    { label: 'Contaduría Pública', value: 'Contaduria_Publica' },
    { label: 'Enfermeria Profesional', value: 'Enfermeria_Profesional' },
    { label: 'Medicina', value: 'Medicina' },
    { label: 'Odontología', value: 'Odontologia' }
  ];
  const cargo = [
    { label: 'Estudiante', value: 'estudiante' },
    { label: 'Profesor', value: 'profesor' },
    { label: 'Bienestar', value: 'bienestar' }
  ];


export default function Registro() {
  return (
    <div className="bg-[#111827] flex justify-center items-center">
      <form className="bg-[#111827] lg:static h-screen  flex justify-center lg:w-[70%] lg:h-screen flex-col p-20">
        <div>
          <h1 className="flex justify-center text-5xl text-white font-semibold">
            Registrate
          </h1>
        </div>
        <div className="flex flex-wrap mt-10">
          <div className="w-full sm:w-full md:w-1/3 md:pr-10">
            <label className="block text-lg text-white font-medium">
              Nombres
            </label>
            <input
              className="w-full border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="w-full sm:w-full md:w-1/3 md:pl-2 md:pr-2 md:ml-auto">
            <label className="block text-lg text-white font-medium">
              Apellidos
            </label>
            <input
              className="w-full border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
              placeholder="Ingrese su apellido"
            />
          </div>
          <div className="w-full sm:w-full md:w-1/3 md:pl-10 md:ml-auto">
            <label className="block text-lg text-white font-medium">
              Usuario
            </label>
            <input
              className="w-full border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
              placeholder="Ingrese un usuario único"
            />
          </div>
        </div>
        <div className='Registro-container mt-3'>
                    <label className='text-lg text-white font-medium'>Facultad</label>
                    <Select className='text-white'
                    defaultValue={{label:'Seleccione su facultad', value: 'Default'}}
                    options = {facultad}
                    styles={customStyles}
                    />
        </div>

        <div className="flex flex-wrap mt-4">
          <div className="w-full sm:w-full md:w-1/2 md:pr-10">
            <label className="block text-lg text-white font-medium">
              Correo
            </label>
            <input
              className="w-full md:w-[125%] border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
              placeholder="Ingrese su correo institucional"
            />
          </div>
          <div className="w-full sm:w-full md:w-1/2 md:pl-20 md:ml-auto">
            <label className="block text-lg text-white font-medium">
              Cargo
            </label>              
              <Select className='w-full text-whit bg-[#1D2432] mt-2'
                    defaultValue={{label:'Seleccione su cargo', value: 'cargo'}}
                    options = {cargo}
                    styles={customStyles}
                    />
          </div>
        </div>

        <div className="flex flex-wrap mt-3">
          <div className="w-full sm:w-full md:w-1/2 md:pr-10">
            <label className="block text-lg text-white font-medium">
              Contraseña
            </label>
            <input
              className="w-full border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
              placeholder="Ingrese su contraseña" type="password"
            />
          </div>
          <div className="w-full sm:w-full md:w-1/2 md:pl-10 md:ml-auto">
            <label className="block text-lg text-white font-medium">
              Confirmar contraseña
            </label>
            <input
              className="w-full border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
              placeholder="Confirme su contraseña" type="password"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-y-4">
          <Link
            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 bg-[#55B7C9] font-semibold text-lg text-center rounded-xl"
            to={"/contenido"}
          >
            Registrarse
          </Link>
        </div>
        <div className="flex justify-center">
          <p className="font-medium text-lg text-gray-200 mt-4">
            ¿Ya estas registrado?
          </p>
          <Link className="text-lg pl-3 text-[#55B7C9] mt-4 hover:scale-[1.06] ease-in-out transition-all" to={'/login'}>
            Iniciar sesión
          </Link>
        </div>
      </form>
    </div>
  );
}
