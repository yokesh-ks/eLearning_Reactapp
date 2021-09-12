import './css/style.css';
import loginbg from './images/loginbg.jpg';

function Login(){
    return(
        <div class="login">
            <form>
                <h1>form</h1>
                <label>Email</label>
                <input type="text" Placeholder="Enter your Email"></input>
                <label>Password</label>
                <input type="password" Placeholder="Enter your Password"></input>
                <button>Login</button>
            </form>
            <img src={loginbg} alt="loginbg"/>
        </div>
    )
}

export default Login;