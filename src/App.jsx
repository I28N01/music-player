import NavRoutes from './routes'
import { BrowserRouter } from 'react-router-dom';
// import Toggle from '../src/resource/Toggle'
// import { ThemeContext, themes } from './themes/ThemeContext'

function App() {
  return (
      <div>
          <BrowserRouter>
              <NavRoutes />
          </BrowserRouter>
          {/* <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <Toggle
              onChange={() => {
              if (theme === themes.light) setTheme(themes.dark)
              if (theme === themes.dark) setTheme(themes.light)
              }}
              value={theme === themes.dark}
            />
          )}
          </ThemeContext.Consumer> */}
      </div>

  )
}


export default App;


