import "./LoginSignup.css";
export default function LoginSignup(props) {
  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Welcome to Rudra</h2>
          <p>
            Login or register from here to chat with one and only kishan trivedi
            and raja
          </p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-8 col-sm-12">
          <div className="login-form card p-4">
            <form>
              <div className="form-group">
                <label className="label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label className="label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="row">
                <button type="submit" className="btn btn-black mt-2">
                  Login
                </button>
                <button type="submit" className="btn btn-secondary mt-2">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
