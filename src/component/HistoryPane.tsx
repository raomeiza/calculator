import * as React from "react";
import {
  IconButton,
  List,
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { DoubleArrowDown } from "./svg/icons";
import SlideContainer from "./SlideContainer";
export default function Login(props: any) {
  const [checked, setChecked] = React.useState([0]);
  const { open, setOpen } = props;

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // listen to localstorage changes and pull history data from localstorage
  const [history, setHistory] = React.useState<any[]>([]);
  React.useEffect(() => {
    let localHistry = localStorage.getItem("history");
    if (localHistry !== null){
      const newHistory = JSON.parse(localHistry)
      if (newHistory !== history) {
        setHistory(newHistory);
      }
  }
  }, [history]);
    

  return (
    <SlideContainer open={open} setOpen={setOpen}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            height: open ? "480px" : 0,
            overflowY: "scroll",
          }}
        >
          <Typography variant="h4" id="tableTitle" component="div">
            History
          </Typography>
          {history.map((value, index) => {
            const labelId = `checkbox-list-label-${index}`;

            return (
              <ListItem
                sx={{
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                  border: "1px solid #e0e0e0",
                  my: 1,
                  borderRadius: 2
                }}
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <DoubleArrowDown />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={value.operation}
                    secondary={value.result}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
    </SlideContainer>
  );
}
