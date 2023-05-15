import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import Notpage from "./pages/NotPage"
import SuspenseFallback from './components/SuspenseFallback'
import AdminLayout from './components/Layouts/AdminLayout'
import AppLayout from './components/Layouts/AppLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthUser } from './redux/actions/UserAction'
import DashBoard from './pages/Dashboard/DashBoard'


const App = () => {
  const { pathname } = useLocation();
  const { isAuth } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth && localStorage.getItem('token')) {
      dispatch(getAuthUser());
    }
  }, [isAuth]);

  if (pathname.startsWith('/admin')) return <AdminLayout />;

  return (
    <Suspense fallback={SuspenseFallback}>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/*" element={<AppLayout />} />
        <Route path="*" element={<Notpage />} />

      </Routes>
    </Suspense>
  )
}

export default App
