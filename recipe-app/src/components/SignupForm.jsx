import React from "react";
import { FormikProvider, useFormik } from "formik";
import { object, string, ref } from "yup";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../../service/auth";
import toast from "react-hot-toast";

const SignupForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(signupApi, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("signup");
    },
  });

  const authSchema = object({
    name: string().required().label("Name"),
    email: string().required().email().label("Email address"),
    password: string()
      .required()
      .label("Please provide your password")
      .matches(
        /(?=[A-Za-z0-9@#$%^&+!=\s]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=\s])(?=.{8,}).*$/,
        {
          message: "Password is weak. Try again",
        }
      ),
    confirmPassword: string()
      .required("Please confirm your password")
      .oneOf([ref("password")], "Password doesn't match")
      .label("Confirm Password"),
  });
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnMount: false,
    enableReinitialize: true,
    validationSchema: authSchema,
    onSubmit: (values) => {
      try {
        console.log(values);
        mutation.mutate(values);
        // navigate("/recipe");
        toast.success("Signup successfully!");
      } catch (error) {
        toast.error("An error occurred");
        console.log(error);
      }
    },
  });
  return (
    <FormikProvider values={form}>
      <div
        className="login-area bg-img bg-overlay mx-auto"
        style={{ backgroundImage: "url(/img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="container mx-auto login-area-border">
          <div className="text-center login-header">
            <h2 className="login-header">Signup</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mx-auto">
              <div className="contact-form-area">
                <form onSubmit={form.handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values["name"]}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values["email"]}
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values["password"]}
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values["confirmPassword"]}
                      />
                    </div>
                    <p className="col-12 text-center para-text">
                      Already have an account?{" "}
                      <span>
                        <a href="/login" className="signup-text">
                          Login
                        </a>
                      </span>
                    </p>
                    <div className="col-12 text-center">
                      <button className="btn delicious-btn mt-30" type="submit">
                        Signup
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormikProvider>
  );
};

export default SignupForm;
