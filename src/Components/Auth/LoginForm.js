import React, { useRef, useState } from "react";
import Card from "../Containers/Card";
import axios from "axios";
import ButtonPrimary from "../util/ButtonPrimary";
import InputField from "../util/InputField";
import { useDispatch } from "react-redux";
import { openPopupComponent } from "../../Store/generalAction";
import { categories } from "../../Store/generalData";
import { Login } from "../../Store/authAction";

function LoginForm() {
  // Redux
  const dispatch = useDispatch();

  // States
  const [isLogging, setLogging] = useState(true);

  // Ref
  const passwordRef = useRef();
  const confirmRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const formRef = useRef();

  // alternate Logging
  function alterLogging() {
    setLogging(!isLogging);
    formRef.current.reset();
  }

  // checking passwords
  async function submitHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!isLogging) {
      const name = nameRef.current.value;
      const confirmPassword = confirmRef.current.value;
      if (password !== confirmPassword) {
        dispatch(
          openPopupComponent(
            "Passwords do not match. Please check and try again.",
            true
          )
        );
      } else {
        const res = await axios.post("/sign-up", {
          name,
          email,
          password,
          categories,
        });
        if (res.data.error) {
          dispatch(openPopupComponent(res.data.error, true));
        } else {
          dispatch(openPopupComponent(res.data.massage));
          setLogging(true);
        }
      }
    } else {
      const res = await axios.post("/sign-in", { email, password });

      if (res.data.error) {
        dispatch(openPopupComponent(res.data.error, true));
      } else {
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          localStorage.removeItem("token");
        }, 1000 * 60 * 15);
        // dispatch(openPopupComponent(res.data.massage));
        dispatch(Login(res.data.token));
      }
    }
    e.target.reset();
  }

  return (
    <>
      <Card>
        <h2 className=" newFont text-lime-500 font-medium text-2xl text-center">
          {isLogging ? "Log In" : "Sign Up"}
        </h2>
        <div className=" my-3 text-slate-800">
          <form action="" onSubmit={submitHandler} ref={formRef}>
            {!isLogging && (
              <InputField name={"name"} type={"text"} req={true} ref={nameRef}>
                Name
              </InputField>
            )}
            <InputField name={"email"} type={"email"} req={true} ref={emailRef}>
              Email
            </InputField>
            <InputField
              name={"password"}
              type={"password"}
              req={true}
              minLength={6}
              ref={passwordRef}
            >
              Password
            </InputField>
            {!isLogging && (
              <InputField
                name={"confirm_password"}
                type={"password"}
                req={true}
                minLength={6}
                ref={confirmRef}
              >
                Confirm Password
              </InputField>
            )}
            <div className=" mt-5">
              <ButtonPrimary type="submit" className="w-full">
                {isLogging ? "Log In" : "Sign Up"}
              </ButtonPrimary>
            </div>
          </form>
        </div>
        <button
          className=" text-center w-full p-2 bg-lime-200 rounded"
          onClick={alterLogging}
        >
          {isLogging
            ? "Don't have an account? Sign up"
            : "Have an account? Log In"}
        </button>
      </Card>
    </>
  );
}

export default LoginForm;
