import { Box, Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Products from '../../pages/admin/Products/Products';
import Dashboard from '../../pages/admin/Dashboard/Dashboard';
import AdminProtected from '../../pages/protected/AdminProtected';
import  Orders  from '../../pages/admin/Orders/Orders';
import Settings from '../../pages/admin/Settings/Settings';
import Sidebar from '../Admin/Common/Sidebar';

const AdminLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        background: '#0b1420',
        color: '#E0E0E0',
      }}
    >
      <Sidebar />
      <Stack
        sx={{
          width: '80%',
          height: 'auto',
          minHeight: '100vh',
          marginLeft: '20%',
        }}
        p={2}
      >
        <Routes>
          <Route path="/" element={<AdminProtected />}>
            <Route path="admin/">
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products/*">
                <Route index element={<Products />} />
                {/* <Route path=":productId" element={<EditProduct />} /> */}
              </Route>

              <Route path="orders" element={<Orders />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </Stack>
    </Box>
  );
};

export default AdminLayout;