import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <a href="/signup">Signup</a> | <a href="/login">Login</a> | <a href="#">About</a> |{" "}
        <a href="#">My Todos</a> | <LogoutLink />
      </nav>
    </header>
  );
}
