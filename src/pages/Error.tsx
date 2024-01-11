import "../assets/scss/Error.scss";

const Error = () => {
  return (
    <>
        <div className="main_body">
          <div className="number">404</div>
          <div className="title">Nothing to see here</div>
          <p>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </p>
          <a href="/">
            Go back to home
          </a>
        </div>
    </>
  );
};

export default Error;
