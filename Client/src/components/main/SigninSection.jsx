import styles from "@styles/main/SigninSection.module.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "./Spinner";
import { AuthContext } from "@contexts/AuthContext.jsx";

//Component
function SigninSection() {
  //Necessary hooks and states
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Signin handler function
  const handleSignin = async (event) => {
    //prevent reload
    event.preventDefault();

    //form inputs
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    //try to login
    try {
      setLoading(true);
      await login({ email, password });

      //navigate
      navigate("/projects");
    } catch (error) {
      console.log("Error during signing. ", error);
      alert(
        "Something happened wrong. Check out console to investigate what's wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Start Project Now!</h1>
      <div className={styles["signin-form"]}>
        <form onSubmit={handleSignin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="At least 8 characters"
            name="password"
            id="password"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
      {loading && <Spinner />}
    </div>
  );
}

export default SigninSection;
