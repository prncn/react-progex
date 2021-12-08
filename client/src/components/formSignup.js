import '../index.css';
import { Input } from '../pages/Home';
import { signup } from '../firebase';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const displayNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      alert('Passwords do not match');
    }

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value, displayNameRef.current.value);
      navigate('/dash');
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }
  return (
    <form>
      <p className="home-form__heading">
        Sign up
      </p>

      <Input ref={displayNameRef} type="text" placeholder="Display Name" />
      <Input ref={emailRef} type="email" placeholder="E-Mail" />
      <Input ref={passwordRef} type="password" placeholder="Password" />
      <Input
        ref={passwordConfirmRef}
        type="password"
        placeholder="Confirm Password"
      />

      <div className="flex justify-between">
        <button
          disabled={loading}
          onClick={handleSignup}
          type="button"
          className="py-2 px-6 bg-green-200 hover:bg-green-300 rounded-lg text-gray-800 font-semibold mt-5"
        >
          Sign up
        </button>
        <Link to="/login">
          <button
            type="button"
            className="home-form__right-btn"
          >
            Got an account
          </button>
        </Link>
      </div>
    </form>
  );
}
