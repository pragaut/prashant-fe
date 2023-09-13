import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Fragment, useEffect, useState } from 'react';
import { menuIconCircularStyle } from '../../../utils/constants';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface IDrawerTemplate {
  drawerWidth: number;
  drawerState: boolean | undefined;
  listStartHeight: number;
  anchor: Anchor;
  list: any;
  children?: any;
}

const DrawerTemplate: React.FC<IDrawerTemplate> = (props) => {
  const [menuState, setMenuState] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean, icon: boolean = false) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
      setMenuState(icon);
    };

  useEffect(() => {
    console.log(menuState);
    if (props.drawerState != undefined) {
      setState({ ...state, [props.anchor]: !menuState });
      setMenuState(!menuState);
    }
  }, [props.drawerState]);

  const menuIconCLick =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      setMenuState(!menuState);
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width:
          anchor === 'top' || anchor === 'bottom' ? 'auto' : props.drawerWidth,
        // marginTop: props.listStartHeight + 'px',
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          height: '45px',
          backgroundColor: '#f2f2f2',
        }}
      ></Box>
      {props.list}
    </Box>
  );
  return (
    <Fragment key={props.anchor}>
      <IconButton
        sx={menuIconCircularStyle}
        onClick={toggleDrawer(props.anchor, !menuState, !menuState)}
      >
        {!menuState && <MenuIcon fontSize="small" />}
        {menuState && <KeyboardBackspaceIcon fontSize="small" />}
      </IconButton>
      {/* <Button onClick={toggleDrawer(props.anchor, true)}>{props.anchor}</Button> */}
      <Drawer
        anchor={props.anchor}
        open={state[props.anchor]}
        onClose={toggleDrawer(props.anchor, false)}
        variant="persistent"
        sx={{
          zIndex: 10,
        }}
      >
        {list(props.anchor)}
      </Drawer>
    </Fragment>
  );
};

export default DrawerTemplate;
