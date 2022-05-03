import {Theme} from "@app-mui/color/Theme";
import {AppBarProps, ContainerProps, DrawerProps, IconButtonProps, StackProps} from "@mui/material";

const drawerWidth = 300

const openedMixin = {
  zIndex: -1,
  width: drawerWidth,
  overflowX: 'hidden',
  transition: Theme.transitions.create('width', {
    easing: Theme.transitions.easing.sharp,
    duration: Theme.transitions.duration.enteringScreen,
  }),
}

const closedMixin = {
  zIndex: -1,
  overflowX: 'hidden',
  transition: Theme.transitions.create('width', {
    easing: Theme.transitions.easing.sharp,
    duration: Theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${Theme.spacing(7)} + 1px)`,
  [Theme.breakpoints.up('sm')]: {
    width: `calc(${Theme.spacing(8)} + 1px)`,
  },
}


export const MuiLayoutProps = {
  stack: {
    direction: 'row',
    spacing: 2,
  } as StackProps,

  container: {
    fixed: true,
    maxWidth: 'xl',
    disableGutters: true,
  } as ContainerProps,

  header: {
    elevation: 1,
    position: "fixed"
  } as AppBarProps,

  btnOpenDrawer: {
    color: 'inherit',
    edge: 'start',
  } as IconButtonProps,

  drawer: (props?: DrawerProps) => ({
    flexShrink: 0,
    width: drawerWidth,
    variant: 'permanent',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    sx: {
      '& .MuiDrawer-paper': props.open ? openedMixin : closedMixin,
    }
  }) as DrawerProps,

}