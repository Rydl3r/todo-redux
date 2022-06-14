import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useAppSelector, useAppDispatch } from "../hooks";
import { deleteTodo } from "../features/tasksSlice";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    marginRight: "auto",
    marginLeft: "auto",
    borderBottom: "0px",
    paddingTop: 15,
  },
});

const TableComp = () => {
  const classes = useStyles();

  const rows = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Let's Do It!</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    dispatch(deleteTodo(row.id));
                  }}
                >
                  Do
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
