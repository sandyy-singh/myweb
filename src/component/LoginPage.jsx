import React from "react";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="parent">
        <div className="frame">
          <div className="part1"></div>
          <div className="part2">
            <h1>welcome</h1>
            <p>Login to your account to continue</p>
            <form>
              <input type="email" placeholder="sandeeprewa43@gmail.com" />
              <input type="password" value="sandeep@123" />

              <div className="checkbox1">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="check"
                    name="vehicle2"
                    value="Car"
                  />
                  &nbsp;
                  <label for="vehicle2"> Remember Me</label>
                </div>
                <p>Forgot password</p>
              </div>
              <div className="loginbtn">
                <input type="button" value="login" />
              </div>
            </form>

            <p>
              Don't have an account? <span>sign Up</span>
            </p>
            <div className="line">
              <div class="line-1"></div>

              <div class="line-2"> or</div>

              <div class="line-3"></div>
            </div>

            <div className="liginWith">
             <button className="btn1">Login with facebook</button>
             <button className="btn2">Login with google</button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
