import { createUseStyles } from "react-jss";

const classes = createUseStyles({
  home: {
    width: "100%",
    height: "100vh",
    backgroundColor: ({ theme }) => theme.backgroundColor,
    overflowX: "hidden",
  },
  movies: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "0 auto",
    backgroundColor: ({ theme }) => theme.backgroundColor,
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: [1, 2, 3, 4].map((i) => "0.25fr").join(" "),
    gap: "100px",
  },
  searchInput: {
    width: "350px",
    height: "50px",
    backgroundColor: "lightblue",
    color: ({ theme }) => theme.color,
    display: "flex",
    margin: "30px auto",
    textAlign: "center",
    fontSize: "medium",
  },
  flexItem: {
    display: "flex",
    "& button": {
      height: "30px",
      marginTop: "40px",
      marginRight: "50px",
    },
  },
});

export default classes;
