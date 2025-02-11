
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponet from './components/ListEmployeeComponet'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* // http://localhost:3005 */}
        <Route path='/' element = {<ListEmployeeComponet/>}></Route>
        {/* // http://localhost:3005/employees */}
        <Route path='/employees' element={<ListEmployeeComponet/>}></Route>
        {/* // http://localhost:3005/add-employee */}
        <Route path='/add-employee' element={<EmployeeComponent />}></Route>
        {/* // http://localhost:3005/edit-employee/1 */}
        <Route path='/edit-employee/:id' element={<EmployeeComponent />}></Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
