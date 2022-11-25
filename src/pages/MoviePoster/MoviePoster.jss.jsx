import { createUseStyles } from "react-jss";

const classes = createUseStyles({
  mainDiv: {
    width: "100vw",
    height: "100vh",
    overflowX: "hidden",
    backgroundColor: ({ theme }) => theme.backgroundColor,
  },
  movieContainer: {
    backgroundColor: "lightblue",
    display: "flex",
    flexDirection: "column",
    width: "600px",
    height: "600px",
    margin: "auto",
    marginTop: "5vh",
    gap: "15px",
    padding: "10px",
  },
  title: {
    color: ({ theme }) => theme.color,
    textTransform: "uppercase",
  },
  details: {
    fontWeight: "150",
    fontSize: "large",
    color: ({ theme }) => theme.color,
    "& span": {
      fontSize: "18px",
      fontStyle: "italic",
    },
  },
});

export default classes;
