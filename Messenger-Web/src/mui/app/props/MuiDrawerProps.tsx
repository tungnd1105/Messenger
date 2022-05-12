import {DrawerProps, SxProps} from "@mui/material";
import {Theme} from "@app-mui/common/theme/Theme";
import {headerHeight} from "@app-mui/app/props/MuiHeaderProps";
import {closedDuration, openedDuration} from "@app-mui/common/MuiProps";

export const drawerWidth = 400;
export const drawerWidthMini = 64

const MuiDrawerSxProps = {
  drawerSx: (isMini: boolean) => ({
    zIndex: -1,
    flexShrink: 0,
    top: headerHeight,
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      width: isMini ? drawerWidthMini : drawerWidth,
      transition: isMini? openedDuration('width'): closedDuration('width'),
      ...isMini && {
        [Theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      }
    },
  }) as SxProps
}

export const MuiDrawerProps = {
  drawer: (isMini: boolean) => ({
    width: drawerWidth,
    variant: 'permanent',
    sx: MuiDrawerSxProps.drawerSx(isMini)
  }) as DrawerProps,
}