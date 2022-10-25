import React from "react";

const LoginPage = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#000000" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/user_picture_800-v8/image_uploads/dd731817-2ef1-43e4-89b1-95587dbe75ab/original.jpeg?outputFormat=webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "0.5rem 0 0 0.5rem" }}
                  />
                  <img
                    src=" https://druid.fi/wp-content/uploads/2020/11/DruidMokki2020-1331-2048x1365.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "0.5rem 0 0 0.5rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img src="https://druid.fi/wp-content/uploads/2021/06/druid_droplet_32x41px-e1624446969900.png" />
                        <span className="h1 fw-bold mb-0 mx-2">Druid</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" forhtml="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" forhtml="form2Example27">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#FA2D1D" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
