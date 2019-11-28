import React from 'react';
import { Editor, EditorState } from 'draft-js';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container, Card, ToggleButton } from './styles';

import api from '../../services/api';

const ENTER_KEY = 13;

function Auth({ history }) {
  const [toggle, setToggle] = React.useState(true);
  const [user, setUser] = React.useState({
    name: '',
    password: '',
  });
  const [userRegister, setUserRegister] = React.useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleLogin = async () => {
    try {
      const response = await api.post(`api-token-auth/`, {
        username: user.name,
        password: user.password,
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e, func) => {
    if (e.keyCode === ENTER_KEY) {
      func();
    }
  };

  const handleRegister = async () => {
    try {
      await api.post(`rest-auth/registration/`, {
        username: userRegister.name,
        email: userRegister.email,
        password1: userRegister.password1,
        password2: userRegister.password2,
      });
    } catch (error) {
      console.log(error);
    }
    setToggle(!toggle);
  };

  return (
    <Container>
      <Card show={toggle}>
        <h1>Sign in</h1>
        <input
          type="text"
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
          name="name"
          placeholder="Username"
        />
        <input
          type="password"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
          name="password"
          placeholder="Password"
          onKeyDown={e => handleKeyDown(e, handleLogin)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </Card>
      <Card show={!toggle}>
        <h1>Sign up</h1>
        <input
          type="text"
          value={userRegister.name}
          onChange={e =>
            setUserRegister({ ...userRegister, name: e.target.value })
          }
          name="name"
          placeholder="Username"
        />
        <input
          type="email"
          value={userRegister.email}
          onChange={e =>
            setUserRegister({ ...userRegister, email: e.target.value })
          }
          name="email"
          placeholder="Email"
        />
        <input
          type="password1"
          value={userRegister.password1}
          onChange={e =>
            setUserRegister({ ...userRegister, password1: e.target.value })
          }
          name="password2"
          placeholder="Password"
        />
        <input
          type="password2"
          value={userRegister.password2}
          onChange={e =>
            setUserRegister({ ...userRegister, password2: e.target.value })
          }
          name="password2"
          placeholder="Password Again"
          onKeyDown={e => handleKeyDown(e, handleRegister)}
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </Card>
      <div>
        <ToggleButton onClick={() => setToggle(!toggle)}>
          {toggle ? 'Register' : 'Login'}
        </ToggleButton>
      </div>
    </Container>
  );
}

Auth.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Auth);
