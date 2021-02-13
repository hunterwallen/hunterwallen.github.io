import React from 'react';
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Logo from "../assets/logo.png";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "4em",
	},
	logo: {
		height: "7.5em",
	},
	name: {
		...theme.typography.name,
	},
	tabContainer: {
		marginLeft: "auto",
	},
	tab: {
		...theme.typography.tab,
		minWidth: 12,
		marginLeft: "25px",
	},
	button: {
		...theme.typography.resumeBtn,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
			fontWeight: 900,
		},
		color: "#fff",
		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25px",
		height: "10px",
		padding: "22px",
		fontSize: ".995rem",
	},
    }));

export default function Header() {

  const classes = styles();
  const theme = useTheme();

  const routes = [
  		{ id: "0", name: "Home", link: "/" },
  		{ id: "1", name: "About", link: "/about" },
  		{ id: "2", name: "Contact", link: "/contact" },
  		{ id: "3", name: "GitHub", link: "/github" },
  		{ id: "4", name: "Resume", link: "/resume" },
  	];

  const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	React.useEffect(() => {
		[...routes].forEach((route) => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (value !== route.id) {
						setValue(route.id);
					}
					break;
				default:
					break;
			}
		});
	}, [value, routes]);

  const tabs = (
		<React.Fragment>
			<Tabs onChange={handleChange}>
				{routes.map((route, id) => (
					<Tab

						label={route.name}
						key={`${route}.${id}`}

					></Tab>
				))}
			</Tabs>
      <Button component={Link} to={"#"}>Resume</Button>
    </React.Fragment>
	);

	return (
		<React.Fragment>
			<AppBar position="fixed" color="primary">
        <ToolBar disableGutters>
          <Button disableRipple component={Link} to={"#"}>
  					   <img src={Logo} style={{height:100}} />
  				 </Button>
  				<h1>Hunter Wallen</h1>
          {tabs}
        </ToolBar>
			</AppBar>
      <div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
