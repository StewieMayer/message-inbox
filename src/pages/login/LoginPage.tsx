import Header from "../../components/Header";
import LoginForm from "./components/login-form/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col grow">
      <Header>
        <h1 className="text-2xl font-bold text-white">Login Page</h1>
      </Header>
      <main className="flex grow justify-center items-center bg-blue-100">
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
