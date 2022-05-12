import {BoxProps} from "@mui/material";
import {headerHeight} from "@app-mui/app/props/MuiHeaderProps";
import {closedDuration, openedDuration} from "@app-mui/common/MuiProps";
import {drawerWidth, drawerWidthMini} from "@app-mui/app/props/MuiDrawerProps";

export const MuiMainProps = (isDrawerMiniOpen:boolean) => ({
  component: "main",
  sx:{
    position: "fixed",
    top: headerHeight,
    left: isDrawerMiniOpen ? drawerWidthMini : drawerWidth,
    transition: isDrawerMiniOpen? openedDuration(['left','right']) : closedDuration(['right','left']),
  }
}) as BoxProps;