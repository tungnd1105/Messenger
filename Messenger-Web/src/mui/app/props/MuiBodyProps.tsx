import {Theme} from "@app-mui/common/theme/Theme";
import {BoxProps, ContainerProps, DrawerProps, SxProps} from "@mui/material";

const drawerWidth = 300;
const headerHeight = "64px";

const openedDuration = (props:string|string[]) =>  Theme.transitions.create(props, {
  easing: Theme.transitions.easing.sharp,
  duration: Theme.transitions.duration.enteringScreen,
})
const closedDuration = (props:string|string[]) =>  Theme.transitions.create(props, {
  easing: Theme.transitions.easing.sharp,
  duration: Theme.transitions.duration.leavingScreen,
})

const openedMixin = {
  zIndex: -1,
  top: '60px',
  width: drawerWidth,
  overflowX: 'hidden',
  height: `calc(100% - ${headerHeight})`,
  transition: openedDuration('width'),
}
const closedMixin = {
  zIndex: -1,
  top: '60px',
  overflowX: 'hidden',
  height: `calc(100% - ${headerHeight})`,
  width: `calc(${Theme.spacing(7)} + 1px)`,
  transition: closedDuration('width'),
  [Theme.breakpoints.up('sm')]: {
    width: `calc(${Theme.spacing(8)} + 1px)`,
  }
}

const MuiBodySxProps = {
  containerSxProps: {
    display: 'flex',
  } as SxProps,

  mainSxProps: (isOpenDrawer: Boolean) => ({
    top: '60px',
    position: 'fixed',
    height: `calc(100% - ${headerHeight})`,
    left: isOpenDrawer ? drawerWidth : '64px',
    transition: isOpenDrawer ? openedDuration(['left','right']) : closedDuration(['right','left']),
  }),

  drawerSxProps: (isOpen: Boolean) => ({
    flexShrink: 0,
    width: drawerWidth,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '.MuiDrawer-paper': isOpen ? openedMixin : closedMixin,
  }),
}

export const MuiBodyProps = {
  container: {
    fixed: true,
    maxWidth: 'xl',
    disableGutters: true,
    sx: MuiBodySxProps.containerSxProps,
  } as ContainerProps,

  main: (isOpenDrawer: Boolean) => ({
    sx: MuiBodySxProps.mainSxProps(isOpenDrawer),
  }) as BoxProps,

  drawer: (props?: DrawerProps) => ({
    variant: 'permanent',
    sx: MuiBodySxProps.drawerSxProps(props?.open),
  }) as DrawerProps,
}