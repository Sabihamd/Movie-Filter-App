import { createUseStyles } from "react-jss";

const styles = {
  title: {
    color: ({ theme }) => theme.color,
    fontSize: "18px",
    fontFamily: "Lucida Sans",
    textTransform: "uppercase",
  },
  link: {
    extend: "title",
    textDecoration: "none",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "3px 2px 2px 2px",
    backgroundColor: "lightblue",
    width: "350px",
    height: "420px",
    "&:hover": {
      fontSize: "larger",
      fontFamily: "Times New Roman",
      fontWeight: "bolder",
      boxShadow: "3px 3px 3px 0px white",
    },
    "& img": {
      width: "350px",
      height: "378px",
    },
  },
  cardData: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
}
const classes = createUseStyles(styles);

export default classes;
