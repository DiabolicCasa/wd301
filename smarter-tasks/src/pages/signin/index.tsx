
import SigninForm from "./SigninForm";

function Signin() {
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="max-w-md w-full px-8 py-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Sign In
        </h2>
      <SigninForm/>
      </div>
    </div>
  );
}

export default Signin;
