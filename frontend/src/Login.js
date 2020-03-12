import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <form>
                Email: <input type='email'></input><br></br><br></br>
                Password: <input type='password'></input><br></br><br></br>
                <button action='submit'>Login</button>
            </form>
        );
    }
}

export default Login;
