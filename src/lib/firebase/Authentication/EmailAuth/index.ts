import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../..";
import { RoutesEnum } from "../../../../routes";
import { NavigateFunction } from "react-router-dom";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  try {
    setLoading(true);
    // create a new user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const results = userCredential.user;
    console.log(results);
    // Send an email verification to the users email
    await sendEmailVerification(results);
    alert(
      `A verification email has been sent to your email address ${name}!. Please verify your email to login.`
    );
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
    navigate(RoutesEnum.Login);
  }
};

export const loginUserWithEmailAndPassword = async (
  email: string,
  password: string,
  navigate: NavigateFunction
) => {
  try {
    console.log(email, password);
    // Login user
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const results = userCredential.user;
    if (results.emailVerified === false) {
      alert("Please verify your email to login.");
      return;
    }
    navigate(RoutesEnum.Home);
  } catch (error) {
    console.error(error);
  }
};
