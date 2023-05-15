import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

const Item = ({ Icon, item, handleNavigate }) => {
    return (
        <ListItem disablePadding sx={{
            '&:hover': {
                color: '#00B67A',
                backgroundColor: '#b8b7b77e',
            }
        }}>
            <ListItemButton onClick={() => handleNavigate(item?.path)}>
                <ListItemIcon>
                    <Icon
                        sx={{
                            color: '#00B67A',
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary={item?.name} />
            </ListItemButton>
        </ListItem>
    );
};

export default Item;