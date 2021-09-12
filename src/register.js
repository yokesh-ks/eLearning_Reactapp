import './css/style.css';
import loginbg from './images/loginbg.jpg';

function register(){
    return(
        <div class="form">
            <form>
                <h1>Register</h1>
                <label>Username</label>
                <input type="text" Placeholder="Enter your Username"></input>
                <label>Email</label>
                <input type="text" Placeholder="Enter your Email"></input>
                <label>Password</label>
                <input type="password" Placeholder="Enter your Password"></input>

                <button>Register</button>
            </form>
            <img src={loginbg} alt="loginbg"/>
        </div>
    );
}

export default register;