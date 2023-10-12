import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="w-full bg-neutral py-1 text-neutral-content">
      <div className="flex items-center justify-center sm:justify-end align-element gap-x-4">
        <Link to='/login' className="link link-hover text-xs sm:text-sm">Sign in / Guest</Link>
        <Link to='/register' className="link link-hover text-xs sm:text-sm" > Create Account </Link>
      </div>
    </header>
  );
}

export default Header;
