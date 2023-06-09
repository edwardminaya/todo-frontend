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
            EXECUTE
          </a>

          {/* LINKS */}
          <div className="nav justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
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
                    <div className="nav-link">
                      <LogoutLink />
                    </div>
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
