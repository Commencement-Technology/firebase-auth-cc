import Button from "../../components/Button";
import Input from "../../components/Input";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-4 mt-10">
      <Input label="Name" name="name" />
      <Input label="Email Address" name="email" />
      <Input label="Password" name="password" />
      <Button type="submit" text="Sign In" />
    </form>
  );
};

export default RegisterForm;
