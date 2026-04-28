export default function Layout(props) {
  // console.log(props);
  const { children } = props;

  return (
    <>
      <header>
        <h1 className="text-gradient">Dersion</h1>
      </header>
      <main>{children}</main>
      <footer>
        <small>Created by</small>
        <a target="_blank" href="https://github.com/chadiboudaher/">
          <img
            src="https://avatars.githubusercontent.com/u/187886295?v=4"
            alt="pfp"
          />
          <p>@chadiboudaher</p>
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  );
}
