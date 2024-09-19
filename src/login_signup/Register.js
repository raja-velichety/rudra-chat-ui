export default function Register(props) {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="email" className="label">
            EmailID
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            className="form-control"
            placeholder="confirm password"
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
      <button
        className="link-button"
        onClick={() => props.setIsRegistered(!props.isRegistered)}
      >
        already registered? please login from here
      </button>
    </>
  );
}
