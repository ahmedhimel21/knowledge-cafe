import React from 'react';

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 border-b-2 border-slate-200 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-3xl font-bold">Knowledge Cafe</a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="logo.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </>
  );
};

export default Header;