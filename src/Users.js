import { Box } from "@mui/material";
import Userform from "./UserForm";
import UsersTable from "./UsersTable";
 

const users= [

    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "Jane Smith"
    },
    {
        id: 3,
        name: "Alic e Johnson"
    }
]


const Users = () => {
    return (
        <Box>
         <Userform />
        <UsersTable rows ={users}/>
        </Box>
        
    );
}

export default Users;