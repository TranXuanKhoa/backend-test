import React from 'react';

class Register extends React.Component {
    render() {
        return (
            <form>
                Email: <input type='email'></input><br></br><br></br>
                Password: <input type='password'></input><br></br><br></br>
                Firstname: <input type='text'></input><br></br><br></br>
                Lastname: <input type='text'></input><br></br><br></br>
                Address: <input type='text'></input><br></br><br></br>
                Country: <input type='text'></input><br></br><br></br>
                Telephone: <input type='text'></input><br></br><br></br>
                Photo: <input type='file'></input><br></br><br></br>
                <button action='submit'>Register</button>
            </form>
        );
    }
}

export default Register;
