export default function Login(props) {
  return (
    <>
      <form>
        <div className="form-group">
          <label className="label">Email</label>
          <input type="text" className="form-control" placeholder="Email" />
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
        </div>
        <button
          className="link-button"
          onClick={() => props.setIsRegistered(!props.isRegistered)}
        >
          New User? Signup here
        </button>
      </form>
    </>
  );
}
