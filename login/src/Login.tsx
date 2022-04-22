import { Grid, Stack } from '@mui/material';
import { ChangeEvent, Component, MouseEvent } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import SendIcon  from '@mui/icons-material/Send';
import './Login.css';
import { Box } from '@mui/system';

type LoginFormProps = {
    title: string;
}

type LoginFormState = {
    username: string;
    password: string;
}

class LoginForm extends Component<LoginFormProps, LoginFormState> {
    readonly state: LoginFormState= {
        username: "",
        password: ""
    }

    constructor(props: LoginFormProps | Readonly<LoginFormProps>) {
        super(props)
        this.handleUserNameChanged = this.handleUserNameChanged.bind(this)
        this.handlePasswordChanged = this.handlePasswordChanged.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(e: MouseEvent<HTMLButtonElement>): void {
        alert(`Login User: ${this.state.username} Password: ${this.state.password}`)
        // TODO call login api here
    }
      
    handleRegister(e: MouseEvent<HTMLButtonElement>): void {
        alert(`Register Clicked`)
        // TODO call register api here
    }

    handleUserNameChanged(e: ChangeEvent<HTMLInputElement>): void {
        this.setState(
        {
            username: e.target.value
        })
    }

    handlePasswordChanged(e: ChangeEvent<HTMLInputElement>): void {
        this.setState(
        {
            password: e.target.value
        })
    }

    render() {
        return (
            <div className='login-form-conatiner'>
                <Grid container justifyContent="center" justifyItems="center" alignItems="center" direction="column" spacing={1}>
                    <Box m={3} pt={1}>
                        <Typography variant="h4" component="h4">{this.props.title}</Typography>
                    </Box>
                    <Grid className="login-form" container direction="row" spacing={1} width="25em" alignItems="center">
                        <Grid item xs={1}>
                            <Box marginTop={1}>
                                <Typography>UserName:</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={11}>
                            <Box marginTop={1}>
                                <TextField id="outlined-basic" label="User Name" variant="outlined" value={this.state.username} onChange={this.handleUserNameChanged}/>
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Box marginTop={1}>
                                <Typography>Password:</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={11}>
                            <Box marginTop={1}>
                                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" value={this.state.password} onChange={this.handlePasswordChanged}/>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    <Box marginTop={1}>
                        <Stack className="btn-group" direction="row" spacing={1} justifySelf="center">
                            <Button className="my-btn" variant="outlined" endIcon={<SendIcon />} onClick={this.handleLogin}>Login</Button>
                            <Button className="my-btn" variant="contained" onClick={this.handleRegister}>Register</Button>
                        </Stack>
                    </Box>
                </Grid>
            </div>
            
        )
    }
}


export default LoginForm;
