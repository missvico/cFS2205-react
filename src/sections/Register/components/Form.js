function Form(props) {
  return (
    <>
    <form onSubmit={props.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={props.handleChange}
          value={props.newUser.email}
        />
        <div id="emailHelp" className="form-text text-light">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          onChange={props.handleChange}
        value={props.newUser.username}

        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={props.handleChange}
          value={props.newUser.password}
        />
      </div>
      <div className="mb-3 form-check">
        <input checked={props.newUser.notifications} type="checkbox" className="form-check-input" id="exampleCheck1" onChange={props.handleCheck} />
        <label className="form-check-label" for="exampleCheck1">
          Enviarme novedades al email
        </label>
      </div>
      <button disabled={props.disableSubmit} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    {props.success && 
    <div class="alert alert-success m-3" role="alert">
        Tu solicitud fue recibida con exito!
    </div>}
    {props.error && 
    <div class="alert alert-danger m-3" role="alert">
        {props.errorMessage}
    </div>}
  </>
  );
}

export default Form;
