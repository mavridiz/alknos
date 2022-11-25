import NavBar from './Navbar'
import Footer from './footer'


export default function Calculadora() {
  return (
    <>
    <NavBar/>
    <div className="bg-zinc-800 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
         <h2 className="text-4xl font-extrabold text-cyan-500 sm:text-5xl sm:tracking-tight lg:text-6xl">Reakciones</h2>
          <p className="mt-5 text-xl text-gray-200">
            Bienvenido a nuestra calculadora de reacciones químicas
          </p>
          <br/>
          <br/>
          <br/>
          <table className='w-full text-end'>
            <tr>
                <th><h2 className="text-3xl font-extrabold text-green-400 sm:text-3xl sm:tracking-tight lg:text-3xl">Reaktivos</h2></th>
                <th><h2 className="text-3xl font-extrabold text-green-400 sm:text-3xl sm:tracking-tight lg:text-3xl">Produktos</h2></th>
            </tr>
          </table>
          
        <form>
        <table className="table-fixed">
            <tr>
                <th>
                    <input
                    type="text"
                    name="reactive1"
                    id="reactive1"
                    className="block w-56 border-0 border-b border-transparent bg-transparent text-white focus:border-transparent focus:ring-0 sm:text-6xl"
                    placeholder="NaOH"
                    maxlength="6"
                    required
                    />
                </th>
            <th><h2 className="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-3xl">  + </h2></th>
                <th>
                    <input
                    type="text"
                    name="reactive2"
                    id="reactive2"
                    className="block w-56 border-0 border-b border-transparent bg-transparent text-white focus:border-transparent focus:ring-0 sm:text-6xl"
                    placeholder="HCl"
                    maxlength="6"
                    required
                    />
                </th>
                <th><h2 className="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-3xl">→</h2></th>
                
                <th>
                <h2 className="text-5xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl">Producto1</h2>
                </th>
                <th>
<h2 className="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-3xl">+</h2>
                </th>
                <th>
                <h2 className="text-5xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl">Producto2</h2>
                </th>


  </tr>
  </table>
  <br/>
  <br/>
  <br/>
  <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-xl font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
      >
        Calcula
      </button>

        </form>
  
        </div>
        <div>

      
    </div>
      </div>
      <div className='overflow-hidden'>
      
      </div>
    </div>
    <div className='bg-white h-36 overflow-hidden'>
    </div>
    <Footer/>
    </>
  )
}
