import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';
import useMetamask from '../../../hooks/useMetamask';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { account, error, connectMetaMask, disconnectMetaMask } = useMetamask();
  

  // const [show, setShow] = useState(false);
  // const toggle = () => {
  //   setShow(!show);
  // };

  const [role, setRole] = useState('');
  const [uname, setUname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.authenticate({ role, uname, gender, email, phone, password }, 'register'));
  };

  return (
    <>
      <div className="app">
        <div className="app-header">
          <h1>React dApp authentication with React, We3.js and Metamask</h1>
        </div>
        <div className="app-wrapper">
          {/* <div>
            <button onClick={toggle}>Show/Hide</button>
            {
              show ? <div>Welcome <span>Your Balance: {myname}</span></div> : null
            }
          </div> */}
          {!account && (
            <div>
              <button className="app-button__login" onClick={connectMetaMask}>
              Login
              </button>
            </div>
          )}
        </div>
        {account && (
          <div className="app-wrapper">
            <div className="app-details">
              <h2> You are connected to metamask.</h2>
              <div className="app-balance">
                <span>Address: {account}</span>
              </div>
            </div>
            <div>
              <button className="app-buttons__logout" onClick={disconnectMetaMask}>
              Disconnect
              </button>
            </div>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="container"
        style={{ width: '540px' }}
      >
        <div className="field">
          <div className="control">
            <div className="select">
              <select
                required
                value={role}
                onChange={e => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="2">Judge</option>
                <option value="3">Lawyer</option>
                <option value="4">Client</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Name"
              required
              value={uname}
              onChange={e => setUname(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="material-icons md-dark md-inactive">person</i>
            </span>
          </p>
        </div>
        
        <div className="field">
          <div className="control">
            <div className="select">
              <select
                required
                value={gender}
                onChange={e => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="material-icons md-dark md-inactive">email</i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Phone"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="material-icons md-dark md-inactive">phone</i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="material-icons md-dark md-inactive">lock</i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-text-centered">
            <button type="submit" className="button is-success">
              Create account
            </button>
          </p>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
