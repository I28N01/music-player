import NavRoutes from './routes'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
      <div>
          <BrowserRouter>
              <NavRoutes />
          </BrowserRouter>
      </div>

  )
}


export default App;