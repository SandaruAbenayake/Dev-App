import { Paper, Tab, TableBody, TableContainer, TableRow } from "@mui/material";

const UsersTable = rows => {
   <TableContainer component={Paper}>
     <Table>
        <Tablehead>
            <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Action</TableCell>
            </TableRow>
        </Tablehead>
        <TableBody>
            {rows.map(row => (
                <TableRow key={row.id}>
                    <TableCell component='th' scope='row'>
                        {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
     </Table>
   </TableContainer>
}

export default UsersTable;
