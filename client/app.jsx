import { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { Router } from './components/router';
import { ApiContext } from './utils/api_context';
import { AuthContext } from './utils/auth_context';
import { useApi } from './utils/use_api';
import { useJwtRefresh } from './utils/use_jwt_refresh';
import { RolesContext } from './utils/roles_context';
import { parseJwt } from './utils/parse_jwt';
import './app.css';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <script type="text/javascript">console.log("hello, world")</script>
      <div className="top-bar">
        <button onClick={() => setIsOpen(!isOpen)}>Open</button>My Notes
      </div>
      <div className={isOpen ? 'drawer drawer-open' : 'drawer'}></div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
      <div className="main">
        Hello, world
        <div className="other">My name is Joseph</div>
      </div>
    </>
  );
};
