import {Theme} from "@assets/theme/Theme";
import bg from "@assets/images/rm222batch3-mind-03.jpg"
import bg2 from "@assets/images/rm222batch2-mind-03.jpg"

export const loginStyles  = {
  container:{
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
  },
  imgBanner: {
    width: "500px",
    backgroundSize: "cover",
  },
  typography: {
    textTransform:"initial", fontSize: "14px", textAlign: "center"
  },
  girdContainer: {
    direction: "row", alignItems: "center", justifyContent: "center"
  },
  box: {
    width: "1000px", height: "1000px", alignItems: "center"
  },
  stack: {
    height: "100vh", padding: '30px 0', direction: "column", alignItems: "center", justifyContent: "center"
  },
  card: {
    zIndex: 1, width: "100%", height: "100%", padding: "0px", position: "relative", borderRadius: "15px",
    backgroundSize: "cover", backgroundImage: `url(${bg})`,
  },
  gridItemLeft: {
    padding: "50px", direction: "column", justifyContent: "center", marginTop: Theme.spacing(10)
  },
  gridItemRight: {
    padding: "50px", direction: "column", justifyContent: "center", marginTop: Theme.spacing(2)
  }
}