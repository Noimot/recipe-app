import React, { useEffect, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { object, string, ref } from "yup";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { signupApi } from "../../service/auth";
import toast from "react-hot-toast";

const SignupForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [data, setData] = useState();

  const mutation = useMutation(signupApi, {
    onSuccess: (data) => {
      // Invalidate and refetch
      setData(data);
      queryClient.invalidateQueries("signup");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      toast.success("Signup successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(
        "Signup failed. Please check your credentials and try again."
      );
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
      mutation.mutate(values);
    },
  });

  // useEffect(() => {
  //   localStorage.setItem("token", data?.token);
  //   localStorage.setItem("user", JSON.stringify(data?.data?.user));
  // }, data);
  return (
    <FormikProvider value={form}>
      <div
        className="login-area bg-img bg-overlay mx-auto"
        style={{ backgroundImage: "url(/img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="container mx-auto login-area-border">
          <div className="text-left">
            <Link className="nav-brand" to="/">
              <img src="/img/core-img/logo.png" alt="" />
            </Link>
          </div>
          <div className="text-center login-header">
            <h2 className="login-header">Signup</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mx-auto">
              <div className="contact-form-area">
                <form onSubmit={form.handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="signup-text font-italic">
                        {form.errors.name}
                      </div>
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
                      <div className="signup-text font-italic">
                        {form.errors.email}
                      </div>
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
                      <div className="signup-text font-italic">
                        {form.errors.password}
                      </div>

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
                      <div className="signup-text font-italic">
                        {form.errors.confirmPassword}
                      </div>
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
                    <p className="col-12 text-center text-white-1">
                      Already have an account?{" "}
                      <span>
                        <Link to="/login" className="signup-text">
                          Login
                        </Link>
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
