import Form from "./componentes/Form";



function App() {

  return (
  
        <div className="flex w-full h-screen">
        <div className="bg-[#111827] w-full flex items-center justify-center lg:w-1/2">
          <Form />
        </div>       
          <div className="hidden relative lg:flex w-1/2 h-full items-center justify-center bg-[#111827]">
          <img src="logo.png" className="w-[50%]" alt="Imagen de Fondo"></img>
        </div>
      </div>  

        
  );
}

export default App;
