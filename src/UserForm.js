import { Grid, Input, Typography, Button } from "@mui/material"

const Userform = props => {
    return (
        <Grid container spacing={2}
        sx={{
            backgroundColor: '#f5f5f5',
            marginBottom: '20px',
            display: 'block' 
        }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Typography component="h1" align="center">
                User Form
            </Typography>
          </Grid> 

          <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
            <Typography component={"label"} htmlFor="id" sx={{
                color: '#000000',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block'
            }}>
                User ID
            </Typography>
            <Input 
                type="number"
                id="id"
                name="ID"
                sx={{width: '100px'}}
                value={''}
                onChange={e => {}}
            />
          </Grid>  

          <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
            <Typography component={"label"} htmlFor="name" sx={{
                color: '#000000',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block'
            }}>
                User Name 
            </Typography>
            <Input 
                type="text"
                id="name"
                name="Name"
                sx={{width: '100px'}}
                value={''}
                onChange={e => {}}
            />
          </Grid> 

          <Button
            sx={{
                margin: "auto",
                marginBottom: "20px",
                backgroundColor: "#1976d2",
                color: "#fff",
                "&:hover": {
                    backgroundColor: "#1976d2",
                    opacity: 0.8,
                },  
                marginLeft: "15px",
                marginTop: "20px",
            }}
          >
                Add
          </Button>  
        </Grid> 
    );
}
export default Userform;