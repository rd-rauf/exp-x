import React from "react";
import clsx from "clsx";
import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import TransferWithinAStationOutlinedIcon from "@material-ui/icons/TransferWithinAStationOutlined";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import avatarImage from "../../assets/images/abdul_rauf.jpeg";

const useStyles = makeStyles({
  avatar: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0 10px 0",
    "& > *": {
      margin: 8,
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  small: {
    width: 70,
    height: 70,
  },
  large: {
    width: 100,
    height: 100,
  },
  profileInfo: {
    display: "flex",
    justifyContent: "center"
  }
});

export default function AppDrawer({ anchor, openState, onSelect }) {
  const classes = useStyles();

  const closeDrawer = () => {
    onSelect();
  };

  const list = (anchor) => (
    <div className={clsx(classes.list)} onClick={closeDrawer}>
      <Divider />
      <Link to="/accounts">
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccountOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Accounts"} dense secondary={"Manage accounts"} />
        </ListItem>
      </Link>
      <Link to="/heads">
        <ListItem button>
          <ListItemIcon>
            <AccountTreeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Heads"} dense secondary={"Manage heads"} />
        </ListItem>
      </Link>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <TransferWithinAStationOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={"Entries"} dense secondary={"Your transactions"} />
      </ListItem>
      <Divider />
      <Link to="/sign-in">
        <ListItem button>
          <ListItemIcon>
            <ExitToAppOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Logout"} dense secondary={"Logout"} />
        </ListItem>
      </Link>
    </div>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <Drawer anchor={anchor} open={openState} onClose={closeDrawer}>
          <div className={classes.avatar}>
            <ListItemAvatar>
              <Avatar
                alt="Abdul Rauf"
                src={avatarImage}
                className={classes.large}
              >
                AR
              </Avatar>
            </ListItemAvatar>
            <ListItem>
              <ListItemText primary={"Abdul Rauf"} dense secondary={"Web Developer"} />
            </ListItem>
          </div>
          {/* <div className={classes.profileInfo}>
          </div> */}
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
