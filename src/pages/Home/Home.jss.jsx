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
    width: "315px",
    height: "50px",
    backgroundColor: "lightblue",
    color: ({ theme }) => theme.color,
    display: "flex",
    margin: "50px auto",
    textAlign: "center",
    fontSize: "medium",
  },
});

export default classes;
