import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="container my-5">
        <Form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter the email"
              className="form-control"
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter the password"
              className="form-control"
            />
            <label htmlFor="confirm password" className="form-label">
              confirm password
            </label>
            <input
              type="password"
              id="confirm password"
              name="confirm password"
              placeholder="Enter the confirm password"
              className="form-control"
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default App;
