import {Route, Routes} from 'react-router-dom'
import Bienvenida from '../paginas/bienvenida.jsx'
import Crear from '../paginas/crear.jsx'
import Listar from '../paginas/listado.jsx'
import Editar from '../paginas/editar.jsx'

function Router(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Bienvenida/>}/>
                <Route path='/creador' element={<Crear/>}/>
                <Route path="/lista" element={<Listar/>}/>
                <Route path="/editar" element={<Editar/>}/>
            </Routes>
        </>
    )

}

export default Router