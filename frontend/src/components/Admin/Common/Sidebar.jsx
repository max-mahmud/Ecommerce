import LogoutIcon from '@mui/icons-material/Logout';
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../../../constants/Data';
import { getAuthLogout } from '../../../redux/actions/UserAction';
import Item from './ListItem';


const Sidebar = () => {
  const { user } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
  }
  const handleLogout = () => {
    dispatch(getAuthLogout())
  }

  return (
    <>
      <Stack sx={{
        width: '20%',
        backgroundColor: '#1F2A40',
        height: '100vh',
        position: 'fixed'
      }}
        p={2}
      >

        <Typography variant="h5" sx={{ color: '#E0E0E0', textAlign: 'center', textTransform: "uppercase" }}>
          {user.name}
        </Typography>
        <Stack sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
          p={2}>
          <Avatar src={user?.avatar?.url} sx={{ width: 86, height: 86 }} />
        </Stack>
        <Stack>
          <List>
            {
              menuItems.map((item, index) => (
                <Item
                  key={index}
                  item={item}
                  Icon={item.icon}
                  handleNavigate={handleNavigate}
                />
              ))
            }
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout} sx={{
                '&:hover': {
                  color: '#FB5457',
                  backgroundColor: '#b8b7b77e',
                },
                position: 'absolute',
                width: '100%',
                top: "140px",
                left: "0",
              }}>
                <ListItemIcon>
                  <LogoutIcon
                    sx={{
                      color: '#FB5457',
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>









      </Stack >
    </>
  )
}

export default Sidebar


