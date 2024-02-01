import Login from './Component/SelectAdminCust/Login'
import { Route, Routes, useLocation } from 'react-router-dom'
import SingUp from './Component/SelectAdminCust/SingUp'
import Select from './Component/SelectAdminCust/Select'
import NavBar from './Component/Navbar/NavBar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Product from './Component/Product/Product'
const routing = () => {
    const loc=useLocation()
    console.log(loc.pathname,'loc')
    const x=loc.pathname==='/'
    const y=loc.pathname==='/login'
    const z=loc.pathname==='/sign-up'
    return (
        <div>
            
            {!x && !y && !z && <NavBar/>}
            <Routes>
                <Route path='/' element={<Select />} />
                <Route path='/login/:role' element={<Login />} />
                <Route path='/sign-up/:role' element={<SingUp />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product' element={<Product />} />
            </Routes>
        </div>
    )
}

export default routing
