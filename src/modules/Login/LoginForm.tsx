import Button from "../../components/Button";
import Input from "../../components/Input";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4 mt-10">
      <Input label="Email Address" name="email" />
      <Input label="Password" name="password" />
      <a
        href="#"
        className="flex justify-end text-sm leading-6 font-semibold text-red-600 hover:text-red-500"
      >
        Forgot Password
      </a>
      <Button type="submit" text="Sign In" />
    </form>
  );
};

export default LoginForm;
