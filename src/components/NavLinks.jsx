import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "products", text: "products" },
  { id: 3, url: "cart", text: "cart" },
  { id: 4, url: "checkout", text: "checkout" },
  { id: 5, url: "orders", text: "orders" },
];
function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink className='capitalize' to={url}>{text}</NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
