import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* LOGO and APP NAME */}
          <a className="navbar-brand" href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5290/5290982.png"
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            ></img>
            Todo App
          </a>

          {/* LINKS */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              {localStorage.jwt == undefined ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">
                      Signup
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <LogoutLink />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
