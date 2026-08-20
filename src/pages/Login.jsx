import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup
} from "react-bootstrap";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

function Login() {
    

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login Data:", formData);
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">

      <Container>

        <Row className="justify-content-center">

          <Col xs={12} sm={10} md={8} lg={5}>

            <Card className="border-0 shadow-lg">

              <Card.Body className="p-4 p-md-5">

                {/* Header */}

                <div className="text-center mb-4">

                  <h2 className="fw-bold">
                    Task Management
                  </h2>

                  <p className="text-muted mb-0">
                    Welcome back! Please login to your account.
                  </p>

                </div>


                {/* Login Form */}

                <Form onSubmit={handleSubmit}>

                  {/* Email */}

                  <Form.Group className="mb-3">

                    <Form.Label>
                      Email Address
                    </Form.Label>

                    <InputGroup>

                      <InputGroup.Text>
                        <Mail size={18} />
                      </InputGroup.Text>

                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />

                    </InputGroup>

                  </Form.Group>


                  {/* Password */}

                  <Form.Group className="mb-3">

                    <Form.Label>
                      Password
                    </Form.Label>

                    <InputGroup>

                      <InputGroup.Text>
                        <Lock size={18} />
                      </InputGroup.Text>

                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />

                      <Button
                        variant="outline-secondary"
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </Button>

                    </InputGroup>

                  </Form.Group>


                  {/* Remember / Forgot */}

                  <div className="d-flex justify-content-between align-items-center mb-4">

                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                    />

                    <Button
                      variant="link"
                      className="text-decoration-none p-0"
                      type="button"
                    >
                      Forgot Password?
                    </Button>

                  </div>


                  {/* Login Button */}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 py-2 fw-semibold"
                  >
                    Login
                  </Button>

                </Form>


                {/* Register */}

                <div className="text-center mt-4">

                  <span className="text-muted">
                    Don't have an account?{" "}
                  </span>

                 <Button
                variant="link"
                className="text-decoration-none p-0 fw-semibold"
                type="button"
                onClick={() => navigate("/register")}
                >
                Register
                </Button>

                </div>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

    </div>
  );
}

export default Login;
