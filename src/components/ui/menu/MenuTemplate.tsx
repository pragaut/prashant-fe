import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';
import { constants } from '../../../utils/constants';
import SessionManager from '../../../utils/sessions';

export interface IMenuTemplate {
  menuType: 'stdbtn' | 'icobtn';
  tootltipTitle: string;
  buttonText?: string;
  showEndIcon?: boolean;
  buttonColor?: constants['color'];
  imageUrl?: string;
  imageAlt?: string;
  menuId: string;
  aoVertical?: constants['poVerticalDirection'];
  aoHorizontal?: constants['poHorizontalDirection'];
  toVertical?: constants['poVerticalDirection'];
  toHorizontal?: constants['poHorizontalDirection'];
  menuItems: Array<constants['menuItems']>;
  menuItemAction?: any;
  children?: any;
}

const MenuTemplate: React.FC<IMenuTemplate> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();

  const [userName, setUserName] = useState('');
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>, action: any) => {
    setAnchorEl(null);
    if (action != undefined && action != 'backdropClick') action(event);
  };

  useEffect(() => {
    setUserName(SessionManager.getFullName()!);
    console.log('full name', SessionManager.getFullName());
  }, [props]);

  return (
    <>
      <Tooltip title={props.tootltipTitle} placement="bottom">
        <span>
          {props.menuType == 'icobtn' && (
            <IconButton onClick={handleClick} sx={{ p: 0 }}>
              <Avatar
                alt={props.imageAlt ? props.imageAlt : 'User Icon'}
                src={props.imageUrl ? props.imageUrl : '/user.jpg'}
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
              <Box sx={{ fontSize: '0.75rem', pl: 1, textAlign: 'left' }}>
                <Box>
                  <strong>{userName}</strong>
                </Box>
              </Box>
            </IconButton>
          )}
          {(props.menuType == 'stdbtn' || props.menuType == undefined) && (
            <Button
              id="basic-button"
              variant="contained"
              color={props.buttonColor}
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              endIcon={props.showEndIcon ? <KeyboardArrowDownIcon /> : ''}
            >
              {props.buttonText ? props.buttonText : 'Sample Button'}
            </Button>
          )}
        </span>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: props.aoVertical ? props.aoVertical : 'bottom',
          horizontal: props.aoHorizontal ? props.aoHorizontal : 'right',
        }}
        transformOrigin={{
          vertical: props.toVertical ? props.toVertical : 'top',
          horizontal: props.toHorizontal ? props.toHorizontal : 'right',
        }}
      >
        {props.menuItems?.map((item) => {
          return (
            <div key={item.id}>
              <MenuItem
                onClick={(e) =>
                  handleClose(
                    e,
                    item.action ? item.action : props.menuItemAction
                  )
                }
              >
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText>{item.value}</ListItemText>
              </MenuItem>
              {item.hasDivider == true && <Divider />}
            </div>
          );
        })}
      </Menu>
    </>
  );
};

export default MenuTemplate;
