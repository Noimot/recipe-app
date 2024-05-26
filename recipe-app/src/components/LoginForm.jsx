import React, { useEffect, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../service/auth";
import toast from "react-hot-toast";

const LoginForm = () => {
  const queryClient = useQueryClient();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const mutation = useMutation(loginApi, {
    onSuccess: (data) => {
      // Invalidate and refetch
      setData(data);
      queryClient.invalidateQueries("login");
    },
  });
  const authSchema = object({
    email: string().required().label("Email"),
    password: string().required().label("Password"),
  });
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnMount: false,
    enableReinitialize: true,
    validationSchema: authSchema,
    onSubmit: (values) => {
      console.log(values, "values");
      try {
        mutation.mutate(values);
        // navigate("/recipe");
        toast.success("Login successfully!");
        localStorage.setItem("token", data?.token);
        localStorage.setItem("user", JSON.stringify(data?.data?.user));
        // navigate("/");
      } catch (error) {
        toast.error("An error occurred");
      }
    },
  });
  useEffect(() => {
    localStorage.setItem("token", data?.token);
    localStorage.setItem("user", JSON.stringify(data?.data?.user));
  }, data);
  return (
    <FormikProvider values={form}>
      <div
        className="login-area bg-img bg-overlay mx-auto"
        style={{ backgroundImage: "url(/img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="container mx-auto login-area-border">
          <div className="text-left">
            <a className="nav-brand" href="/">
              <img src="/img/core-img/logo.png" alt="" />
            </a>
          </div>
          <div className="text-center login-header">
            <h2 className="login-header">Login</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mx-auto">
              <div className="contact-form-area">
                <form onSubmit={form.handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="signup-text font-italic">
                        {form.errors.email}
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values["email"]}
                      />
                    </div>
                    <div className="col-12">
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

                    <p className="col-12 text-center text-white-1">
                      You don't have an account?{" "}
                      <span>
                        <a href="/signup" className="signup-text">
                          Signup
                        </a>
                      </span>
                    </p>
                    <div className="col-12 text-center">
                      <button className="btn delicious-btn mt-30" type="submit">
                        Login
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

export default LoginForm;
