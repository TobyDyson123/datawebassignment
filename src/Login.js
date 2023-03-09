import Nav from "./Nav.js";

function Login() {
    return (
        <div className="login-container">
            <Nav />
            <div class="login-box">
                <h2>Sign In</h2>
                <form action="" method="post">
                    <div class="user-box">
                        <input type="text" name="username" required=""></input>
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="password" required=""></input>
                        <label>Password</label>
                    </div>
                    <input id="submit" type="submit" value="Sign In"></input>
                </form>
            </div>
        </div>
    );
  }
  
  export default Login;
  
