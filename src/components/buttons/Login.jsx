import React from "react";
import Button from "react-bootstrap/esm/Button";

export const Login = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
       <span className="fa fa-sign-in me-1" ></span> Login
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Login
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            <Button className="btn btn-primary w-100 mb-4">
            <span className="fa fa-google me-2"></span>Sign in with Google
            </Button>
            <Button className="btn btn-primary w-100 mb-4">
            <span className="fa fa-facebook me-2"></span>Sign in with Facebook
            </Button>
              <form>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-outline-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          
             
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Login;
