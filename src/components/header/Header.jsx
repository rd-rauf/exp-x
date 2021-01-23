import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppDrawer from '../drawer/Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [drawerOpen, setOpenDrawer] = useState(false);

  const openDrawer = () => {
    setOpenDrawer(true);
  }

  const handleSelect = () => {
    setOpenDrawer(false);
  }

  return (
    <div className={classes.root}>
      <AppDrawer anchor={"left"} openState={drawerOpen} onSelect={handleSelect} />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={openDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            { "Personal Expense Manager" }
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
