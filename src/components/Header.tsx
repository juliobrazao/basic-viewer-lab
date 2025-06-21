export type MenuItem = {
  title: string;
  url: string;
  isActive: boolean;
};

interface HeaderProps {
  title: string;
  menuItems: MenuItem[];
}

export default function Header({ title, menuItems }: HeaderProps) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3 outline-0">
      <a className="navbar-brand" href="#">
        {title}
      </a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <div className="navbar-nav me-auto mt-2 mt-lg-0"></div>
        <div className="navbar-nav d-flex my-2 my-lg-0">
          {menuItems.map(({ title, url, isActive }: MenuItem) => (
            <li className="nav-item">
              <a
                className={`nav-link ${isActive ? 'active' : ''}`}
                href={url}
                aria-current="page"
              >
                {title}
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
}
