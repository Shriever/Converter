import React from "react";
import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
        marginTop: '20px'
    },
    input: {
      textAlign: "center",
      outline: "none",
      margin: 0,
      border: "1px #e6e6e6 solid",
      borderBottom: "none",
      borderRadius: 4,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      height: "52px",
      //   lineHeight: '52px',
      fontSize: "28px",
      fontFamily: "helvetica",
      width: "100%",
    },
    shadow: {
      boxShadow: "1px 1px 5px 0 #e5e5e5",
      width: "212px",
    },
    select: {
      width: "100%",
      outline: "none",
      margin: 0,
      border: "1px #e6e6e6 solid",
      backgroundColor: "#fff",
      borderRadius: 2,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      height: "43px",
      textTransform: "capitalize",
      padding: "0 0 0 6px",
    },
    type: {
      width: "100%",
      outline: "none",
      marginBottom: "15px",
      border: "1px #e6e6e6 solid",
      backgroundColor: "#fff",
      padding:'7px',
      borderRadius: '4px'
    },
    equal: {
        fontSize: '25px',
        padding: '0 15px'
    }
  });
});

const Converter = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent='center' alignItems='center' className={classes.root}>
      <Grid item>
        <select className={classes.type}>
          <option value='type'>Temperature</option>
          <option value='type'>Mass</option>
          <option value='type'>Duration</option>
        </select>
        <Grid container justifyContent='center'>
          <Grid item className={classes.shadow}>
            <input type='text' value='1' className={classes.input} />
            <div>
              <select className={classes.select}>
                <option value='kilogram'>kilogram</option>
              </select>
            </div>
          </Grid>
          <Grid item>
            <span className={classes.equal}>=</span>
          </Grid>
          <Grid item className={classes.shadow}>
            <input type='text' value='1' className={classes.input} />
            <div>
              <select className={classes.select}>
                <option value='kilogram'>kilogram</option>
              </select>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Converter;
