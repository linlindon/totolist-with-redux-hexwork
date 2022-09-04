const Navbar = () => {
  return (
    <nav>
      <h1>
        <a href="#">ONLINE TODO LIST</a>
      </h1>
      <ul>
        <li className="todo_sm">
          <a href="#">
            <span>王小明的代辦</span>
          </a>
        </li>
        <li>
          <a href="#loginPage">登出</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
