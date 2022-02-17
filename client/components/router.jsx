import { useContext, useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Home } from './home/_home';
import { AuthContext } from '../utils/auth_context';
import { SignIn } from './sign_in/_sign_in';
import { SignUp } from './sign_up/_sign_up';
import { Admin } from './admin/_admin';
import { DumbComponent } from './dumb_component';

export const Router = () => {
  const [authToken] = useContext(AuthContext);

  return (
    <div>
      <div className="p-4 bg-gray-500 text-white">
        <Routes>
          <Route
            path="demo"
            element={
              <div>
                Hi from the demo page
                <Outlet />
              </div>
            }
          >
            <Route path=":id/:name/:myguy/:america" element={<DumbComponent />} />
            <Route path="edit" />
          </Route>
          <Route path="sign" element={'Hi from the demo page'} />
        </Routes>
      </div>
      <Routes>
        <Route
          path="/"
          element={authToken ? <Home /> : <Navigate replace to="signin" />} // no token means not logged in
        />
        <Route path="admin" element={<Admin />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="demo" element={<div>Hello, world</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
};
