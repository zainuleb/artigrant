import React from "react";

const RegisterLanding = () => {
  return (
    <div className="containerRegister">
      <div className="card">
        <h5>You are an ARTIST who needs funding for a project?</h5>
        <p>
          Register here and we connect you to a pool of funding experts who
          support you within the entire funding process.
        </p>
        <button>Register</button>
        <img src="assets/img/artistRegister.png" alt="Abstract Art 1" />
      </div>
      <div className="card">
        <h5>You are a GRANT APPLICATION ADVISOR who support artists?</h5>
        <p>Register here and we connect you to an artist/art project.</p>
        <button>Register</button>
        <img src="assets/img/writerRegister.png" alt="Abstract Art 2" />
      </div>
    </div>
  );
};

export default RegisterLanding;
