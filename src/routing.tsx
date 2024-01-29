import Login from './Component/SelectAdminCust/Login'
import { Route, Routes } from 'react-router-dom'
import SingUp from './Component/SelectAdminCust/SingUp'
import Select from './Component/SelectAdminCust/Select'

const routing = () => {
    return (
        
            <Routes>
                <Route path='/' element={<Select />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SingUp />} />
            </Routes>
    )
}

export default routing
