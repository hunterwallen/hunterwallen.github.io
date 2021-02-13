import { createMuiTheme } from "@material-ui/core/styles";

const myBlue = "#00017c";
const myGold = "#d3a01e";
const myGray = "#868686";

export default createMuiTheme({
	palette: {
		common: { blue: `${myBlue}`, gold: `${myGold}` },
		primary: { main: `${myBlue}` },
		secondary: { main: `${myGold}` },
	},
	typography: {
		tab: {
			fontFamily: "Ralelway",
			textTransform: "none",
			fontWeight: 700,
			fontSize: "1rem",
		},
	},

});
