const Navbar = () => {
  return (
    <nav className="mx-auto flex justify-between items-center bg-blue-100 px-12 py-8">
      <h1 className="text-xl font-semibold">Logo</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Product</li>
        <li>Cart 1</li>
        <li>$5.50</li>
      </ul>
    </nav>
  );
};

export default Navbar;
