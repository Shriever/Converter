import React from "react";
import {
  withStyles,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "gatsby";
import { List } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {},
    link: {
      textDecoration: "none",
      color: "#000",
    },
  });
});

const AccordionStyle = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    height: "100%",
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

// const sections = ["Currency", "Mass", "Duration"];
const sections = [
  { title: "Temperature", links: ["USD > ISL", "USD > PDF", "GFF > TSM"] },
  { title: "Mass", links: ["USD > ISL", "USD > PDF", "GFF > TSM"] },
  { title: "Duration", links: ["USD > ISL", "USD > PDF", "GFF > TSM"] },
  { title: "Speed", links: ["USD > ISL", "USD > PDF", "GFF > TSM"] },
  { title: "Length", links: ["USD > ISL", "USD > PDF", "GFF > TSM"] },
];

const Accordion = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className={classes.root}>
      {sections.map((section, idx) => {
        return (
          <AccordionStyle
            key={section.title}
            square
            expanded={expanded === `panel${idx + 1}`}
            onChange={handleChange(`panel${idx + 1}`)}
          >
            <AccordionSummary>
              <ListItem button style={{ width: "100%" }}>
                <Typography style={{ textTransform: "uppercase" }}>
                  {section.title}
                </Typography>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {section.links.map(text => {
                  return (
                    <ListItem key={text} button style={{ minWidth: "300px" }}>
                      <Link className={classes.link} to='/'>
                        {text}
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </AccordionDetails>
          </AccordionStyle>
        );
      })}
    </div>
  );
};
export default Accordion;
