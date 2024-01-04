import React, { useState } from 'react';


const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div className='row row-cols-1'>
      <div className='col-md-8 col-sm-12'>
        <form className='card p-3 mt-5' onSubmit={onSubmit}>
          <h3 className='mx-auto'>Register</h3>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control'
              required
              value={user.email}
              onChange={onChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='form-control'
              required
              value={user.password}
              onChange={onChange}
            />
          </div>
          <button className='btn btn-primary'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;