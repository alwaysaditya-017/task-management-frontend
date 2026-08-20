import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup
} from "react-bootstrap";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

    console.log("Registration Data:", formData);
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center py-4">

      <Container>

        <Row className="justify-content-center">

          <Col xs={12} sm={11} md={9} lg={6}>

            <Card className="border-0 shadow-lg">

              <Card.Body className="p-4 p-md-5">

                {/* Header */}

                <div className="text-center mb-4">

                  <h2 className="fw-bold">
                    Create Account
                  </h2>

                  <p className="text-muted mb-0">
                    Create your Task Management account
                  </p>

                </div>


                <Form onSubmit={handleSubmit}>

                  {/* First Name & Last Name */}

                  <Row>

                    <Col md={6}>

                      <Form.Group className="mb-3">

                        <Form.Label>
                          First Name
                        </Form.Label>

                        <InputGroup>

                          <InputGroup.Text>
                            <User size={18} />
                          </InputGroup.Text>

                          <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />

                        </InputGroup>

                      </Form.Group>

                    </Col>


                    <Col md={6}>

                      <Form.Group className="mb-3">

                        <Form.Label>
                          Last Name
                        </Form.Label>

                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />

                      </Form.Group>

                    </Col>

                  </Row>


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

                  <Form.Group className="mb-4">

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
                        placeholder="Create a password"
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

                    <Form.Text className="text-muted">
                      Use at least 8 characters.
                    </Form.Text>

                  </Form.Group>


                  {/* Register */}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 py-2 fw-semibold"
                  >
                    Create Account
                  </Button>

                </Form>


                {/* Login Link */}

                <div className="text-center mt-4">

                  <span className="text-muted">
                    Already have an account?{" "}
                  </span>

                  <Button
                    variant="link"
                    className="text-decoration-none p-0 fw-semibold"
                    type="button"
                  >
                    Login
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

export default Register;
